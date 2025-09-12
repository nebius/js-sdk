import { inspect } from 'util';

// Symbol used to allow objects to provide a JSON-safe representation for
// logging. Works similar to util.inspect.custom but is used for JSON
// serialization of log argument values. If `argJson` is absent but
// `util.inspect.custom` is present on an object, we fall back to using it
// for safety reasons.
export const customJson = Symbol('customJson');
export const custom = inspect.custom;

interface ConsoleLike {
  error(message?: unknown, ...optionalParams: unknown[]): void;
}

const selfDebug = process?.env?.NEBIUS_LOGGING_SELF_DEBUG === 'true';
const dbg: (msg: string, ...args: unknown[]) => void = selfDebug
  ? (msg, ...args) => console.debug(msg, ...args)
  : () => {};

export type Argument = { [key: string]: unknown };
export enum Level {
  TRACE = 10,
  DEBUG = 20,
  INFO = 30,
  WARN = 40,
  ERROR = 50,
  NONE = 100,
}

function cleanTrace(trace: string, skip: number): string {
  const lines = trace.split('\n').slice(1 + skip); // first line is "Error name: message"
  if (lines.length <= skip) {
    return '';
  }
  const ret: string[] = [];
  for (const line of lines) {
    let trimmed = line.trim();
    if (trimmed.startsWith('at ')) {
      trimmed = trimmed.substring(3);
    }
    ret.push(trimmed);
  }
  return ret.join('\n');
}

function getTrace(skip: number = 2): string {
  const err = new Error();
  if (!err.stack) {
    return '';
  }
  return cleanTrace(err.stack, skip);
}

// Exported helper to produce a JSON-safe representation of a value. This
// mirrors the logic previously embedded inside JsonHandler.serializeValue so
// callers (for example implementations of [customJson]) can call it
// recursively.
export function inspectJson(val: unknown): unknown {
  // Primitives pass-through
  if (val === null) return null;
  const t = typeof val;
  if (t === 'string' || t === 'number' || t === 'boolean') return val;
  if (t === 'undefined') return undefined;

  // If object has customJson or util.inspect.custom, prefer customJson then
  // fallback to inspect.custom
  try {
    const anyVal = val as Record<PropertyKey, unknown> | undefined;
    const customFn = anyVal?.[customJson] ?? anyVal?.[custom];
    if (customFn !== undefined) {
      if (typeof customFn === 'function') {
        // allow custom serializer to return anything JSON-serializable
        return customFn.call(anyVal);
      }
      return customFn;
    }
  } catch (e) {
    dbg('inspectJson: custom serializer threw error', e);
  }

  // Safe JSON serialization with circular refs handled
  try {
    const seen = new WeakSet<object>();
    const cloned = (function clone(v: unknown): unknown {
      if (v === null) return null;
      const vt = typeof v;
      // Allow nested values to provide custom JSON representation via
      // customJson or util.inspect.custom
      try {
        const maybeAny = v as Record<PropertyKey, unknown> | undefined;
        const nestedCustom = maybeAny?.[customJson] ?? maybeAny?.[custom];
        if (nestedCustom !== undefined) {
          if (typeof nestedCustom === 'function') return nestedCustom.call(maybeAny);
          return nestedCustom;
        }
      } catch (e) {
        dbg('inspectJson: nested custom serializer threw error', e);
      }

      if (vt === 'string' || vt === 'number' || vt === 'boolean' || vt === 'undefined') return v;
      if (vt === 'function') return `[Function:${(v as Function).name || 'anonymous'}]`;
      if (vt === 'symbol') return String(v);

      if (Array.isArray(v)) {
        const arr = v as unknown[];
        if (seen.has(arr as object)) return '[Circular]';
        seen.add(arr as object);
        return arr.map(clone);
      }
      if (v instanceof Date) return v.toISOString();
      if (v instanceof Error) return { name: v.name, message: v.message, stack: v.stack };
      if (vt === 'object') {
        const obj = v as Record<string, unknown>;
        if (seen.has(obj as object)) return '[Circular]';
        seen.add(obj as object);
        const o: Record<string, unknown> = {};
        for (const k of Object.keys(obj)) {
          try {
            o[k] = clone(obj[k]);
          } catch {
            o[k] = '[Unserializable]';
          }
        }
        return o;
      }
      return String(v);
    })(val);
    return cloned;
  } catch (e) {
    // As a last resort use inspect output
    try {
      return inspect(val, { depth: 2 });
    } catch {
      return String(val);
    }
  }
}

export interface Handler {
  log(level: Level, message: string, args: Argument, name: string, traceLevel: number): void;
}

type Filter = string | RegExp | ((name: string, level: Level) => boolean);
type Filters = Filter[] | Filter;

type FormatFunction = (opts: {
  name: string;
  level: Level;
  time: Date;
  message: string;
  args?: string;
  trace?: string;
}) => string;
type ArgFormatFunction = (key: string, value: string) => string;

type Writer = (s: string) => void;
class ConsoleLikeWrapper implements ConsoleLike {
  constructor(private readonly output: (s: string) => void) {}

  error(message?: unknown, ...optionalParams: unknown[]): void {
    this.output(`${message}`);
    for (const p of optionalParams) {
      this.output(` ${p}`);
    }
    this.output('\n');
  }
}
type Output = ConsoleLike | Writer;

export class ConsoleHandler implements Handler {
  private consoleLike: ConsoleLike;
  private level: Level;
  private filters: Filters;
  private format: FormatFunction;
  private argFormat: ArgFormatFunction = (key, value) => `${key}=${value}`;
  private argDelimiter: string = ', ';
  private alwaysAddTrace: boolean = false;

  constructor(opts?: {
    output?: Output;
    level?: Level;
    format?: FormatFunction | string;
    argFormat?: ArgFormatFunction;
    argDelimiter?: string;
    filters?: Filters;
    alwaysAddTrace?: boolean;
  }) {
    this.alwaysAddTrace = !!opts?.alwaysAddTrace;
    if (opts?.output) {
      if (typeof opts.output === 'function') {
        this.consoleLike = new ConsoleLikeWrapper(opts.output);
      } else {
        this.consoleLike = opts.output;
      }
    } else {
      this.consoleLike = console as ConsoleLike;
    }
    this.level = opts?.level ?? Level.INFO;
    this.filters = opts?.filters ?? /.*/;
    this.argFormat = opts?.argFormat ?? ((key, value) => `${key}=${value}`);
    this.argDelimiter = opts?.argDelimiter ?? ', ';

    const makeFormatterFromTemplate =
      (template: string) =>
      ({
        name,
        level,
        time,
        message,
        args,
        trace,
      }: {
        name: string;
        level: Level;
        time: Date;
        message: string;
        args?: string;
        trace?: string;
      }) =>
        template.replace(/\{(.*?)(name|level|time|message|args|trace)\}/g, (_, prefix, key) => {
          const replacements: { [k: string]: string } = {
            name,
            level: Level[level] ?? String(level),
            time: time.toISOString(),
            message,
            args: args ?? '',
            trace: trace ?? '',
          };
          return (replacements[key] ? (prefix ?? '') : '') + (replacements[key] ?? '');
        });

    if (typeof opts?.format === 'string') {
      this.format = makeFormatterFromTemplate(opts.format);
    } else if (typeof opts?.format === 'function') {
      this.format = opts.format;
    } else {
      this.format = makeFormatterFromTemplate('{time} [{level}] {name}: {message}{ args}{\ntrace}');
    }
  }

  [custom](): string {
    return `ConsoleHandler(level=${Level[this.level]})`;
  }
  [customJson](): object {
    return {
      $type: 'ConsoleHandler',
      level: Level[this.level],
    };
  }

  private matchFilters(name: string, level: Level): boolean {
    const fs: Filter[] = Array.isArray(this.filters) ? this.filters : [this.filters];
    for (const f of fs) {
      if (typeof f === 'string') {
        if (name.includes(f)) return true;
      } else if (f instanceof RegExp) {
        if (f.test(name)) return true;
      } else if (typeof f === 'function') {
        try {
          if (f(name, level)) return true;
        } catch (e) {
          dbg('ConsoleHandler.matchFilters: filter threw error', e);
        }
      }
    }
    return false;
  }

  argString(args: Argument): string {
    const ret = [];
    for (const key in args) {
      if (Object.prototype.hasOwnProperty.call(args, key)) {
        const val = args[key];
        const valStr = inspect(val, { depth: 5 });
        ret.push(this.argFormat(key, valStr));
      }
    }
    return ret.join(this.argDelimiter);
  }

  log(level: Level, message: string, args: Argument, name: string, traceLevel: number = 3): void {
    if (level < this.level) return;
    if (!this.matchFilters(name, level)) return;
    if (this.alwaysAddTrace && traceLevel < 0) {
      traceLevel = 3;
    }

    const trace = traceLevel >= 0 ? getTrace(traceLevel) : undefined;
    const out = this.format({
      name,
      level,
      time: new Date(),
      message,
      args: this.argString(args),
      trace,
    });

    try {
      this.consoleLike.error(out);
    } catch (e) {
      dbg('ConsoleHandler.log: consoleLike.error threw error', e, {
        level,
        message,
        args,
        name,
        traceLevel,
      });
    }
  }
}

export class PrettyHandler implements Handler {
  private consoleLike: ConsoleLike;
  private level: Level;
  private filters: Filters;
  private argFormat: ArgFormatFunction = (key, value) => `${key}=${value}`;
  private argDelimiter: string = ', ';
  private useColors: boolean;
  private alwaysAddTrace: boolean = false;

  constructor(opts?: {
    output?: Output;
    level?: Level;
    argFormat?: ArgFormatFunction;
    argDelimiter?: string;
    filters?: Filters;
    colors?: boolean;
    alwaysAddTrace?: boolean;
  }) {
    this.alwaysAddTrace = !!opts?.alwaysAddTrace;
    if (opts?.output) {
      if (typeof opts.output === 'function') {
        this.consoleLike = new ConsoleLikeWrapper(opts.output);
      } else {
        this.consoleLike = opts.output;
      }
    } else {
      this.consoleLike = console as ConsoleLike;
    }
    this.level = opts?.level ?? Level.INFO;
    this.filters = opts?.filters ?? /.*/;
    this.argFormat = opts?.argFormat ?? ((key, value) => `${key}=${value}`);
    this.argDelimiter = opts?.argDelimiter ?? ', ';
    this.useColors = opts?.colors ?? true;
  }
  [custom](): string {
    return `PrettyHandler(level=${Level[this.level]})`;
  }
  [customJson](): object {
    return {
      $type: 'PrettyHandler',
      level: Level[this.level],
    };
  }

  private matchFilters(name: string, level: Level): boolean {
    const fs: Filter[] = Array.isArray(this.filters) ? this.filters : [this.filters];
    for (const f of fs) {
      if (typeof f === 'string') {
        if (name.includes(f)) return true;
      } else if (f instanceof RegExp) {
        if (f.test(name)) return true;
      } else if (typeof f === 'function') {
        try {
          if (f(name, level)) return true;
        } catch (e) {
          dbg('PrettyHandler.matchFilters: filter threw error', e);
        }
      }
    }
    return false;
  }

  private colorize(text: string, code: string) {
    if (!this.useColors) return text;
    const reset = '\x1b[0m';
    return `${code}${text}${reset}`;
  }

  private levelColor(level: Level) {
    // TRACE grey, DEBUG cyan, INFO green, WARN yellow, ERROR red
    switch (level) {
      case Level.TRACE:
        return '\x1b[90m';
      case Level.DEBUG:
        return '\x1b[36m';
      case Level.INFO:
        return '\x1b[32m';
      case Level.WARN:
        return '\x1b[33m';
      case Level.ERROR:
        return '\x1b[31m';
      default:
        return '\x1b[37m';
    }
  }

  private formatArgs(args: Argument): string {
    const parts: string[] = [];
    for (const key in args) {
      if (Object.prototype.hasOwnProperty.call(args, key)) {
        const val = args[key];
        // Special-case Errors to show their message in red
        let valStr: string;
        let valueColor = '\x1b[37m'; // default white
        try {
          if (val instanceof Error) {
            valStr = `${val.name}: ${val.message}`;
            valueColor = '\x1b[31m'; // red for errors
            if (val.stack) {
              valStr += `\n${this.colorize(
                cleanTrace(val.stack, val.message.split('\n').length - 1),
                '\x1b[90m',
              )}`;
            }
          } else {
            valStr = inspect(val, { depth: 5 });
            // primitives & Date -> teal (use cyan ANSI as teal approximation)
            const vt = typeof val;
            const isPrimitiveOrDate =
              val === null ||
              vt === 'number' ||
              vt === 'boolean' ||
              vt === 'undefined' ||
              val instanceof Date;
            valueColor = isPrimitiveOrDate ? '\x1b[36m' : '\x1b[37m';
          }
        } catch (e) {
          valStr = String(val);
        }
        // keys grey, values colored based on type
        const k = this.colorize(key, '\x1b[90m');
        const v = this.colorize(valStr, valueColor);
        parts.push(this.argFormat(k, v));
      }
    }
    return parts.join(this.argDelimiter);
  }

  log(level: Level, message: string, args: Argument, name: string, traceLevel: number): void {
    if (level < this.level) return;
    if (!this.matchFilters(name, level)) return;
    if (this.alwaysAddTrace && traceLevel < 0) {
      traceLevel = 3;
    }

    const timeStr = new Date().toISOString();
    const levelStr = Level[level] ?? String(level);

    const timeColored = this.colorize(timeStr, '\x1b[34m'); // blue
    const levelColored = this.colorize(levelStr, this.levelColor(level));
    const nameStr = name;
    // Errors: message red, otherwise keep message yellow
    const messageColored = this.colorize(
      message,
      level >= Level.ERROR ? '\x1b[31m' : level >= Level.WARN ? '\x1b[33m' : '\x1b[37m',
    ); // red for ERROR, yellow for WARN, white otherwise

    const argStr = Object.keys(args).length ? ` ${this.formatArgs(args)}` : '';

    const trace = traceLevel >= 0 ? getTrace(traceLevel) : undefined;
    const traceStr = trace ? `\n${this.colorize(trace, '\x1b[90m')}` : '';

    const out = `${timeColored} [${levelColored}] ${nameStr}: ${messageColored}${argStr}${traceStr}`;

    try {
      this.consoleLike.error(out);
    } catch (e) {
      dbg('PrettyHandler.log: consoleLike.error threw error', e, {
        level,
        message,
        args,
        name,
        traceLevel,
      });
    }
  }
}

export class JsonHandler implements Handler {
  private consoleLike: ConsoleLike;
  private level: Level;
  private filters: Filters;
  private alwaysAddTrace: boolean = false;

  constructor(opts?: {
    output?: Output;
    level?: Level;
    filters?: Filters;
    alwaysAddTrace?: boolean;
  }) {
    this.alwaysAddTrace = !!opts?.alwaysAddTrace;
    if (opts?.output) {
      if (typeof opts.output === 'function') {
        this.consoleLike = new ConsoleLikeWrapper(opts.output);
      } else {
        this.consoleLike = opts.output;
      }
    } else {
      this.consoleLike = console as ConsoleLike;
    }
    this.level = opts?.level ?? Level.INFO;
    this.filters = opts?.filters ?? /.*/;
  }
  [custom](): string {
    return `JsonHandler(level=${Level[this.level]})`;
  }
  [customJson](): object {
    return {
      $type: 'JsonHandler',
      level: Level[this.level],
    };
  }

  private matchFilters(name: string, level: Level): boolean {
    const fs: Filter[] = Array.isArray(this.filters) ? this.filters : [this.filters];
    for (const f of fs) {
      if (typeof f === 'string') {
        if (name.includes(f)) return true;
      } else if (f instanceof RegExp) {
        if (f.test(name)) return true;
      } else if (typeof f === 'function') {
        try {
          if (f(name, level)) return true;
        } catch (e) {
          dbg('JsonHandler.matchFilters: filter threw error', e);
        }
      }
    }
    return false;
  }

  private serializeValue(val: unknown): unknown {
    return inspectJson(val);
  }

  log(level: Level, message: string, args: Argument, name: string, traceLevel: number = 3): void {
    if (level < this.level) return;
    if (!this.matchFilters(name, level)) return;
    if (this.alwaysAddTrace && traceLevel < 0) {
      traceLevel = 3;
    }

    const time = new Date();
    const trace = traceLevel >= 0 ? getTrace(traceLevel) : undefined;

    const serializedArgs: { [k: string]: unknown } = {};
    for (const key in args) {
      if (Object.prototype.hasOwnProperty.call(args, key)) {
        serializedArgs[key] = this.serializeValue(args[key]);
      }
    }

    const outObj: Record<string, unknown> = {
      ...serializedArgs,
      time: time.toISOString(),
      level: Level[level] ?? String(level),
      name,
      message,
    };
    if (trace) outObj.trace = trace;

    try {
      this.consoleLike.error(JSON.stringify(outObj));
    } catch (e) {
      dbg('JsonHandler.log: consoleLike.error threw error', e, {
        level,
        message,
        args,
        traceLevel,
      });
    }
  }
}

export function parseLevel(v?: string | number): Level | undefined {
  if (v === undefined || v === null) return undefined;
  if (typeof v === 'number') {
    switch (v) {
      case Level.TRACE:
      case Level.DEBUG:
      case Level.INFO:
      case Level.WARN:
      case Level.ERROR:
      case Level.NONE:
        return v as Level;
      default:
        return undefined;
    }
  }

  const s = String(v).trim().toUpperCase();
  if (s === '') return undefined;
  // numeric string
  if (/^\d+$/.test(s)) {
    const n = parseInt(s, 10);
    return parseLevel(n);
  }

  switch (s) {
    case 'TRACE':
      return Level.TRACE;
    case 'DEBUG':
      return Level.DEBUG;
    case 'INFO':
      return Level.INFO;
    case 'WARN':
    case 'WARNING':
      return Level.WARN;
    case 'ERROR':
      return Level.ERROR;
    case 'NONE':
    case 'OFF':
      return Level.NONE;
    default:
      return undefined;
  }
}

let deprecatedWarningLogger: Logger | null = null;
export function deprecatedWarn(
  message: string,
  type?: string,
  fullName?: string,
  date?: string,
): void {
  try {
    if (!deprecatedWarningLogger) {
      let fullMsg = `[DEPRECATED] `;
      if (type) fullMsg += `${type} `;
      if (fullName) fullMsg += `${fullName}: `;
      fullMsg += 'Deprecated';
      if (date) fullMsg += `, will be removed on: ${date}`;
      fullMsg += `: ${message}.`;
      return console.warn(fullMsg);
    }
    const args: Argument = {};
    if (type) args['type'] = type;
    if (fullName) args['full name'] = fullName;
    if (date) args['will be removed on'] = date;
    deprecatedWarningLogger.warn(`Deprecated: ${message}.`, args);
  } catch (e) {
    dbg('deprecatedWarn: error logging deprecation warning', e, {
      message,
      type,
      fullName,
      date,
    });
  }
}
export function setDeprecatedWarningLogger(logger: Logger): void {
  dbg('setDeprecatedWarningLogger: called');
  deprecatedWarningLogger = logger.detached('nebius.deprecated');
}

export function defaultHandler(opts?: {
  output?: Output;
  level?: Level;
  filters?: Filters;
  colored?: boolean;
  alwaysAddTrace?: boolean;
}) {
  dbg('defaultHandler: called', { opts });
  // Detect if stderr is a TTY and supports colors. Respect NO_COLOR and FORCE_COLOR env vars.
  const env = typeof process !== 'undefined' && process.env ? process.env : {};
  const forceColor = env.FORCE_COLOR;
  const noColor = env.NO_COLOR;
  const isTTY =
    typeof process !== 'undefined' &&
    process.stderr &&
    (process.stderr as unknown as { isTTY?: boolean }).isTTY;

  const detectedColored = !!forceColor ? forceColor !== '0' : !noColor && !!isTTY;
  const colored = opts?.colored !== undefined ? opts.colored : detectedColored;
  dbg('defaultHandler: color detection', { forceColor, noColor, isTTY, detectedColored, colored });

  // Resolve levels from env variables. NEBIUS_LOG sets global level. NEBIUS_LOG_<NAME> sets per-name filter levels.
  const globalFromEnv = parseLevel(env.NEBIUS_LOG);
  const baseLevel = opts?.level ?? globalFromEnv ?? Level.INFO;
  dbg('defaultHandler: base level resolved', { baseLevel, globalFromEnv, optsLevel: opts?.level });

  const envAlwaysAddTrace = env.NEBIUS_LOG_ALWAYS_ADD_TRACE === 'true';
  const alwaysAddTrace =
    opts?.alwaysAddTrace !== undefined ? opts.alwaysAddTrace : envAlwaysAddTrace;
  dbg('defaultHandler: alwaysAddTrace resolved', { alwaysAddTrace, envAlwaysAddTrace, opts });

  const envFilters: Filter[] = [];
  const envFiltersMap = new Map<string, Level>();
  for (const k of Object.keys(env)) {
    const m = k.match(/^NEBIUS_LOG_(.+)$/);
    if (!m) continue;
    const name = m[1];
    const val = env[k];
    const lvl = parseLevel(val);
    if (lvl === undefined) continue;
    // add filter: include logs for names that contain this name and meet level threshold
    envFilters.push((n: string, l: Level) => n.includes(name) && l >= lvl);
    envFiltersMap.set(name, lvl);
  }

  // combine provided filters with env filters
  let combinedFilters: Filter[];
  if (opts?.filters !== undefined) {
    dbg('defaultHandler: using filters from options and env filters', { envFiltersMap });
    // if caller supplied filters, combine with env filters
    const baseFilters = opts.filters;
    combinedFilters = Array.isArray(baseFilters) ? [...baseFilters] : [baseFilters];
    combinedFilters.push(...envFilters);
  } else if (envFilters.length > 0) {
    dbg('defaultHandler: using only env filters', envFiltersMap);
    // if caller didn't supply filters but env defines some, use only env filters
    combinedFilters = [...envFilters];
  } else {
    dbg('defaultHandler: no filters defined, using match-all');
    // neither caller nor env supplied filters -> default to match all
    combinedFilters = [/./];
  }

  let ret: Handler;
  if (colored) {
    ret = new PrettyHandler({
      output: opts?.output,
      level: baseLevel,
      filters: combinedFilters,
      colors: true,
      alwaysAddTrace,
    });
  } else {
    ret = new ConsoleHandler({
      output: opts?.output,
      level: baseLevel,
      filters: combinedFilters,
      alwaysAddTrace,
    });
  }

  if (!deprecatedWarningLogger) {
    setDeprecatedWarningLogger(new Logger(ret));
  }
  return ret;
}

function loggerChain(handler: Handler, names: string[]): Logger {
  let ret = new Logger(handler, names[0]);
  for (let i = 1; i < names.length; i++) {
    ret = ret.child(names[i]);
  }
  return ret;
}

export function resolveLogger(
  spec?: Logger | Handler | string | number,
  defaultName: string[] | string = ['nebius.default'],
  opts?: {
    output?: Output;
    colored?: boolean;
    filters?: Filters;
    level?: Level;
    alwaysAddTrace?: boolean;
  },
): Logger {
  dbg('resolveLogger: called', { spec, defaultName, opts });
  if (typeof defaultName === 'string') {
    defaultName = defaultName.split('.').filter((x) => x.length > 0);
  }
  // If already a Logger, return it
  if (spec && typeof (spec as Logger).getHandler === 'function') {
    dbg('resolveLogger: spec is already a Logger');
    return spec as Logger;
  }

  // If it's a Handler, wrap in a Logger
  if (spec && typeof (spec as Handler).log === 'function') {
    dbg('resolveLogger: spec is a Handler');
    return loggerChain(spec as Handler, defaultName);
  }

  // If string/number treat as level
  if (typeof spec === 'string' || typeof spec === 'number') {
    dbg('resolveLogger: spec is a level string/number');
    const lvl = parseLevel(spec as string | number);
    const handler = defaultHandler({
      output: opts?.output,
      level: lvl ?? opts?.level,
      filters: opts?.filters,
      colored: opts?.colored,
      alwaysAddTrace: opts?.alwaysAddTrace,
    });
    return loggerChain(handler, defaultName);
  }
  dbg('resolveLogger: spec is empty or unrecognized');

  // Fallback to default handler
  const handler = defaultHandler({
    output: opts?.output,
    level: opts?.level,
    filters: opts?.filters,
    colored: opts?.colored,
    alwaysAddTrace: opts?.alwaysAddTrace,
  });
  return loggerChain(handler, defaultName);
}

class NoopHandler implements Handler {
  log(_level: Level, _message: string, _args: Argument, _name: string, _traceLevel: number): void {
    // no-op
  }
}
export const noopHandler = new NoopHandler();

export class Logger {
  constructor(
    private handler: Handler = noopHandler,
    private name: string = 'default',
    private withFieldsArg: Argument = {},
    private parent?: Logger,
    public traceByDefault: boolean = false, // not propagated to children
  ) {}

  [custom](): string {
    return `Logger(name=${this.name}, handler=${inspect(this.handler)})`;
  }
  [customJson](): object {
    return {
      $type: 'Logger',
      name: this.name,
      handler: inspectJson(this.handler),
    };
  }

  get getName(): string {
    return this.name;
  }

  info(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.INFO, message, args ?? {}, withTrace);
  }

  warn(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.WARN, message, args ?? {}, withTrace);
  }

  error(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.ERROR, message, args ?? {}, withTrace);
  }

  debug(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.DEBUG, message, args ?? {}, withTrace);
  }

  trace(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.TRACE, message, args ?? {}, withTrace);
  }
  private _log(level: Level, message: string, args: Argument, withTrace?: boolean) {
    try {
      if (withTrace === undefined) {
        withTrace = this.traceByDefault;
      }
      this.handler.log(
        level,
        message,
        { ...this.withFieldsArg, ...args },
        this.name,
        withTrace ? 3 : -1,
      );
    } catch (e) {
      dbg('Logger._log: handler.log threw error', e, { level, message, args, withTrace });
    }
  }

  log(level: Level, message: string, args?: Argument, withTrace?: boolean) {
    this._log(level, message, args ?? {}, !!withTrace);
  }

  withFields(fields: Argument, traceByDefault?: boolean): Logger {
    // withFields is sort of the same logger, so keep the same traceByDefault
    return new Logger(
      this.handler,
      this.name,
      { ...this.withFieldsArg, ...fields },
      this.parent,
      traceByDefault !== undefined ? traceByDefault : this.traceByDefault,
    );
  }

  detached(
    name: string,
    additionalArguments: Argument = {},
    traceByDefault: boolean = false,
  ): Logger {
    return new Logger(this.handler, name, additionalArguments, this, traceByDefault);
  }

  child(
    suffix: string,
    additionalArguments: Argument = {},
    traceByDefault: boolean = false,
  ): Logger {
    return new Logger(
      this.handler,
      `${this.name}.${suffix}`,
      { ...this.withFieldsArg, ...additionalArguments },
      this,
      traceByDefault,
    );
  }

  sibling(
    siblingName: string,
    additionalArguments: Argument = {},
    traceByDefault: boolean = false,
  ): Logger {
    if (!this.parent) {
      return new Logger(
        this.handler,
        siblingName,
        {
          ...this.withFieldsArg,
          ...additionalArguments,
        },
        undefined,
        traceByDefault,
      );
    }
    const baseName = this.parent.name;
    return new Logger(
      this.handler,
      `${baseName}.${siblingName}`,
      {
        ...this.withFieldsArg,
        ...additionalArguments,
      },
      this.parent,
      traceByDefault,
    );
  }

  get getHandler(): Handler {
    return this.handler;
  }
}
