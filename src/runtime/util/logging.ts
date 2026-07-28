/**
 * Configures SDK logging and creates named loggers with structured fields.
 *
 * Start with {@link resolveLogger} for a logger from a level, handler, or
 * existing logger. Use {@link defaultHandler} when an application must control
 * output format, filters, or environment integration. Implement
 * {@link Handler} only for custom logging backends.
 *
 * This module does not automatically redact ordinary objects. Use
 * {@link customJson} or sanitize sensitive fields before logging them.
 *
 * @packageDocumentation
 */

import * as fs from 'node:fs';
import { inspect } from 'util';

import { resolveHomeDir } from './path.js';

/**
 * Identifies an optional method that returns a JSON-safe logging value.
 *
 * Add this symbol method to a class when its normal properties contain
 * secrets, circular references, or internal state that must not enter JSON
 * logs. JSON handlers use this method before {@link custom}. If this method is
 * absent, they use {@link custom} as a fallback.
 *
 * @example
 * ```ts
 * import { customJson } from '@nebius/js-sdk/runtime/util/logging';
 *
 * class Session {
 *   constructor(private token: string) {}
 *
 *   [customJson]() {
 *     return { type: 'Session', token: '[redacted]' };
 *   }
 * }
 * ```
 */
export const customJson = Symbol('customJson');

/**
 * Re-exports Node.js
 * {@link https://nodejs.org/api/util.html#utilinspectcustom | util.inspect.custom}
 * for readable text logging.
 */
export const custom = inspect.custom;

/** Defines the minimum console method that built-in log handlers need. */
export interface ConsoleLike {
  /** Writes one formatted record and any optional values. */
  error(message?: unknown, ...optionalParams: unknown[]): void;
}

const selfDebug = process?.env?.NEBIUS_LOGGING_SELF_DEBUG === 'true';
const dbg: (msg: string, ...args: unknown[]) => void = selfDebug
  ? (msg, ...args) => console.debug(msg, ...args)
  : () => {};

/** Contains structured fields attached to a log record. */
export type Argument = { [key: string]: unknown };

/**
 * Lists log severities from most detailed to disabled.
 *
 * A handler emits a record when its numeric level is at least the handler's
 * configured level.
 */
export enum Level {
  /** Represents the trace log level. */
  TRACE = 10,
  /** Represents the debug log level. */
  DEBUG = 20,
  /** Represents the info log level. */
  INFO = 30,
  /** Represents the warn log level. */
  WARN = 40,
  /** Represents the error log level. */
  ERROR = 50,
  /** Represents the none log level. */
  NONE = 100,
}

function cleanTrace(trace: string, skip: number): string {
  // The first stack line contains the error name and message.
  const lines = trace.split('\n').slice(1 + skip);
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

/**
 * Converts a value to a JSON-safe form for structured logging.
 *
 * The function uses {@link customJson} first and {@link custom} second.
 * It handles dates, errors, functions, symbols, and circular references. When
 * conversion fails, it returns an inspected string instead of throwing.
 * A {@link customJson} implementation can call this function to convert nested
 * values.
 *
 * This function does not redact ordinary object properties. Objects that can
 * contain credentials must provide a safe {@link customJson} method or be
 * sanitized before logging.
 */
export function inspectJson(val: unknown): unknown {
  if (val === null) return null;
  const t = typeof val;
  if (t === 'string' || t === 'number' || t === 'boolean') return val;
  if (t === 'undefined') return undefined;

  try {
    const anyVal = val as Record<PropertyKey, unknown> | undefined;
    const customFn = anyVal?.[customJson] ?? anyVal?.[custom];
    if (customFn !== undefined) {
      if (typeof customFn === 'function') {
        return customFn.call(anyVal);
      }
      return customFn;
    }
  } catch (e) {
    dbg('inspectJson: custom serializer threw error', e);
  }

  try {
    const seen = new WeakSet<object>();
    const cloned = (function clone(v: unknown): unknown {
      if (v === null) return null;
      const vt = typeof v;
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
    try {
      return inspect(val, { depth: 2 });
    } catch {
      return String(val);
    }
  }
}

/**
 * Receives records from a {@link Logger}.
 *
 * Custom handlers should avoid throwing. {@link Logger} catches handler errors
 * so a logging failure does not stop an SDK request.
 */
export interface Handler {
  /**
   * Writes one record.
   *
   * A negative `traceLevel` disables the call-site trace. A non-negative value
   * controls how many logging frames the handler skips. A built-in handler
   * with `alwaysAddTrace` enabled can override a negative value.
   */
  log(level: Level, message: string, args: Argument, name: string, traceLevel: number): void;
}

/**
 * Selects log records by logger name and level.
 *
 * A string matches when the name contains it. A regular expression tests the
 * name. A function can inspect both values. Do not use a stateful regular
 * expression with the `g` or `y` flag. The handler retains its `lastIndex`
 * value between records.
 */
export type Filter = string | RegExp | ((name: string, level: Level) => boolean);

/** Defines one filter or a list in which any matching filter accepts a record. */
export type Filters = Filter[] | Filter;

/** Formats the complete data for one text log record. */
export type FormatFunction = (opts: {
  name: string;
  level: Level;
  time: Date;
  message: string;
  args?: string;
  trace?: string;
}) => string;
/** Formats one structured field after the handler converts its value to text. */
export type ArgFormatFunction = (key: string, value: string) => string;

/** Receives one or more formatted text chunks from a handler. */
export type Writer = (s: string) => void;
class ConsoleLikeWrapper implements ConsoleLike {
  constructor(private readonly output: (s: string) => void) {}

  error(message?: unknown, ...optionalParams: unknown[]): void {
    this.output(`${message}`);
    for (const p of optionalParams) {
      this.output(` ${inspect(p)}`);
    }
    this.output('\n');
  }
}

/**
 * Appends text log records to a file.
 *
 * A leading `~/` is expanded. The stream stays open for the lifetime of the
 * wrapper, and this class does not provide a close operation.
 */
export class FileWrapper implements ConsoleLike {
  private fs: typeof fs;
  private stream: import('stream').Writable;
  /** Creates a new file wrapper. */
  constructor(filePath: string) {
    const resolved = resolveHomeDir(filePath);
    this.fs = fs;
    this.stream = this.fs.createWriteStream(resolved, { flags: 'a' });
  }
  /** Appends one formatted record and its optional values. */
  error(message?: unknown, ...optionalParams: unknown[]): void {
    this.stream.write(`${message}`);
    for (const p of optionalParams) {
      this.stream.write(` ${inspect(p)}`);
    }
    this.stream.write('\n');
  }
}

/**
 * Selects log output.
 *
 * A string is a file path. A function receives formatted text. A
 * {@link ConsoleLike} receives records through {@link ConsoleLike.error}.
 */
export type Output = ConsoleLike | Writer | string;

function outputToConsoleLike(output: Output | undefined): ConsoleLike {
  if (typeof output === 'function') {
    return new ConsoleLikeWrapper(output);
  } else if (typeof output === 'string') {
    return new FileWrapper(output);
  } else if (output === undefined) {
    return console as ConsoleLike;
  }
  return output;
}

/**
 * Writes configurable plain-text log records.
 *
 * This handler is suitable for non-interactive output. It supports a custom
 * formatter or a template with `name`, `level`, `time`, `message`, `args`, and
 * `trace` placeholders.
 *
 * @example
 * ```ts
 * import {
 *   ConsoleHandler,
 *   Level,
 *   Logger,
 * } from '@nebius/js-sdk/runtime/util/logging';
 *
 * const handler = new ConsoleHandler({
 *   level: Level.DEBUG,
 *   format: '{time} [{level}] {name}: {message}{ args}',
 * });
 * const logger = new Logger(handler, 'example.worker');
 * logger.debug('Started', { jobId: 'job-1' });
 * ```
 */
export class ConsoleHandler implements Handler {
  private consoleLike: ConsoleLike;
  private level: Level;
  private filters: Filters;
  private format: FormatFunction;
  private argFormat: ArgFormatFunction = (key, value) => `${key}=${value}`;
  private argDelimiter: string = ', ';
  private alwaysAddTrace: boolean = false;

  /**
   * Creates a plain-text handler.
   *
   * The default level is {@link Level.INFO}, the default filter matches every
   * name, and the default output is the process console.
   */
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
    this.consoleLike = outputToConsoleLike(opts?.output);
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

  /** Returns a concise representation for text inspection. */
  [custom](): string {
    return `ConsoleHandler(level=${Level[this.level]})`;
  }
  /** Returns a JSON-safe value for logs. */
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

  /** Converts structured fields to one delimiter-separated text string. */
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

  /** Writes a log entry. */
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

/**
 * Writes human-readable log records with optional ANSI colors.
 *
 * Error values include their message and stack. Use `colors: false` when the
 * output is a file or another destination that does not process ANSI codes.
 */
export class PrettyHandler implements Handler {
  private consoleLike: ConsoleLike;
  private level: Level;
  private filters: Filters;
  private argFormat: ArgFormatFunction = (key, value) => `${key}=${value}`;
  private argDelimiter: string = ', ';
  private useColors: boolean;
  private alwaysAddTrace: boolean = false;

  /**
   * Creates a pretty handler.
   *
   * The default level is {@link Level.INFO}, all logger names match, colors are
   * enabled, and output goes to the process console.
   */
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
    this.consoleLike = outputToConsoleLike(opts?.output);

    this.level = opts?.level ?? Level.INFO;
    this.filters = opts?.filters ?? /.*/;
    this.argFormat = opts?.argFormat ?? ((key, value) => `${key}=${value}`);
    this.argDelimiter = opts?.argDelimiter ?? ', ';
    this.useColors = opts?.colors ?? true;
  }
  /** Returns a concise representation for text inspection. */
  [custom](): string {
    return `PrettyHandler(level=${Level[this.level]})`;
  }
  /** Returns a JSON-safe value for logs. */
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
        let valStr: string;
        let valueColor = '\x1b[37m';
        try {
          if (val instanceof Error) {
            valStr = `${val.name}: ${val.message}`;
            valueColor = '\x1b[31m';
            if (val.stack) {
              valStr += `\n${this.colorize(
                cleanTrace(val.stack, val.message.split('\n').length - 1),
                '\x1b[90m',
              )}`;
            }
          } else {
            valStr = inspect(val, { depth: 5 });
            const vt = typeof val;
            const isPrimitiveOrDate =
              val === null ||
              vt === 'number' ||
              vt === 'boolean' ||
              vt === 'undefined' ||
              val instanceof Date;
            // ANSI does not define teal, so use cyan.
            valueColor = isPrimitiveOrDate ? '\x1b[36m' : '\x1b[37m';
          }
        } catch (e) {
          valStr = String(val);
        }
        const k = this.colorize(key, '\x1b[90m');
        const v = this.colorize(valStr, valueColor);
        parts.push(this.argFormat(k, v));
      }
    }
    return parts.join(this.argDelimiter);
  }

  /** Writes a log entry. */
  log(level: Level, message: string, args: Argument, name: string, traceLevel: number): void {
    if (level < this.level) return;
    if (!this.matchFilters(name, level)) return;
    if (this.alwaysAddTrace && traceLevel < 0) {
      traceLevel = 3;
    }

    const timeStr = new Date().toISOString();
    const levelStr = Level[level] ?? String(level);

    const timeColored = this.colorize(timeStr, '\x1b[34m');
    const levelColored = this.colorize(levelStr, this.levelColor(level));
    const nameStr = name;
    const messageColored = this.colorize(
      message,
      level >= Level.ERROR ? '\x1b[31m' : level >= Level.WARN ? '\x1b[33m' : '\x1b[37m',
    );

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

/**
 * Writes one JSON object per log record.
 *
 * Structured fields appear at the top level. Reserved record fields (`time`,
 * `level`, `name`, `message`, and `trace` when generated) replace fields with
 * the same names from `args`. Values pass through {@link inspectJson}.
 */
export class JsonHandler implements Handler {
  private consoleLike: ConsoleLike;
  private level: Level;
  private filters: Filters;
  private alwaysAddTrace: boolean = false;

  /**
   * Creates a JSON handler.
   *
   * The default level is {@link Level.INFO}, all logger names match, and output
   * goes to the process console.
   */
  constructor(opts?: {
    output?: Output;
    level?: Level;
    filters?: Filters;
    alwaysAddTrace?: boolean;
  }) {
    this.alwaysAddTrace = !!opts?.alwaysAddTrace;
    this.consoleLike = outputToConsoleLike(opts?.output);
    this.level = opts?.level ?? Level.INFO;
    this.filters = opts?.filters ?? /.*/;
  }
  /** Returns a concise representation for text inspection. */
  [custom](): string {
    return `JsonHandler(level=${Level[this.level]})`;
  }
  /** Returns a JSON-safe value for logs. */
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

  /** Writes a log entry. */
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

/**
 * Parses a logging level name or exact numeric value.
 *
 * Names are case-insensitive. `WARNING` maps to {@link Level.WARN}, and `OFF`
 * maps to {@link Level.NONE}. Returns `undefined` for unsupported values.
 */
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
/**
 * Writes a best-effort warning for deprecated generated API elements.
 *
 * Before {@link setDeprecatedWarningLogger} runs, output goes to
 * `console.warn`. Logging errors are ignored.
 */
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
/**
 * Sets the base logger for future deprecation warnings.
 *
 * Warnings use a detached logger named `nebius.deprecated`.
 */
export function setDeprecatedWarningLogger(logger: Logger): void {
  dbg('setDeprecatedWarningLogger: called');
  deprecatedWarningLogger = logger.detached('nebius.deprecated');
}

/** Configures {@link defaultHandler} and fallback handling in {@link resolveLogger}. */
export type HandlerOpts = {
  /** Selects a console-like object, writer function, or append-only file path. */
  output?: Output;
  /** Sets the minimum emitted level. The default is {@link Level.INFO}. */
  level?: Level;
  /** Selects logger names. Any matching filter accepts the record. */
  filters?: Filters;
  /** Selects the pretty colored handler when JSON output is disabled. */
  colored?: boolean;
  /** Adds a call-site trace even when the logger does not request one. */
  alwaysAddTrace?: boolean;
  /** Selects newline-delimited JSON output. */
  useJson?: boolean;
};

/**
 * Creates a log handler from options and Nebius logging environment variables.
 *
 * Explicit scalar options override their matching environment settings.
 * Important settings include `NEBIUS_LOG`, `NEBIUS_LOG_JSON`,
 * `NEBIUS_LOG_ALWAYS_ADD_TRACE`, and `NEBIUS_LOG_OUTPUT`.
 *
 * Per-name variables add environment filters. The suffix is matched with a
 * case-sensitive `loggerName.includes(suffix)` check. For example,
 * `NEBIUS_LOG_auth=DEBUG` matches `nebius.auth`. If `opts.filters` is present,
 * the environment filters are added to it; they are not replaced.
 * A per-name filter cannot lower the handler's global minimum level. To emit
 * debug records, also set `NEBIUS_LOG=DEBUG` or pass
 * `level: Level.DEBUG`.
 *
 * Without explicit output, `NEBIUS_LOG_OUTPUT` accepts `stderr`, `stdout`,
 * `console`, `none`, or a file path. Color selection also follows `NO_COLOR`,
 * `FORCE_COLOR`, and whether stderr is a terminal.
 *
 * @example
 * ```ts
 * import {
 *   defaultHandler,
 *   Level,
 *   Logger,
 * } from '@nebius/js-sdk/runtime/util/logging';
 *
 * const handler = defaultHandler({
 *   level: Level.DEBUG,
 *   useJson: true,
 *   filters: ['nebius.auth', 'nebius.request'],
 * });
 * const logger = new Logger(handler, 'nebius.request');
 * ```
 */
export function defaultHandler(opts?: HandlerOpts): Handler {
  dbg('defaultHandler: called', { opts });
  const env = typeof process !== 'undefined' && process.env ? process.env : {};
  const forceColor = env.FORCE_COLOR;
  const noColor = env.NO_COLOR;
  const isTTY =
    typeof process !== 'undefined' &&
    process.stderr &&
    (process.stderr as unknown as { isTTY?: boolean }).isTTY;

  const useJson =
    typeof opts?.useJson === 'boolean' ? opts.useJson : process?.env?.NEBIUS_LOG_JSON === 'true';
  dbg('defaultHandler: useJson resolved', { useJson, optsUseJson: opts?.useJson });

  let output = opts?.output;
  if (output === undefined) {
    if (process?.env?.NEBIUS_LOG_OUTPUT === 'stderr') {
      output = (x: string) => process.stderr.write(x);
      dbg('defaultHandler: output set to stderr due to NEBIUS_LOG_OUTPUT=stderr');
    } else if (process?.env?.NEBIUS_LOG_OUTPUT === 'stdout') {
      output = (x: string) => process.stdout.write(x);
      dbg('defaultHandler: output set to stdout due to NEBIUS_LOG_OUTPUT=stdout');
    } else if (process?.env?.NEBIUS_LOG_OUTPUT === 'console') {
      output = console as ConsoleLike;
      dbg('defaultHandler: output set to console due to NEBIUS_LOG_OUTPUT=console');
    } else if (process?.env?.NEBIUS_LOG_OUTPUT === 'none') {
      output = () => {};
      dbg('defaultHandler: output set to no-op due to NEBIUS_LOG_OUTPUT=none');
    } else if (process?.env?.NEBIUS_LOG_OUTPUT) {
      output = process.env.NEBIUS_LOG_OUTPUT;
      dbg('defaultHandler: output set to file due to NEBIUS_LOG_OUTPUT=<file_path>', {
        output,
      });
    }
  } else {
    dbg('defaultHandler: output provided in options', { output });
  }

  const detectedColored = !!forceColor ? forceColor !== '0' : !noColor && !!isTTY;
  const colored = opts?.colored !== undefined ? opts.colored : detectedColored;
  dbg('defaultHandler: color detection', { forceColor, noColor, isTTY, detectedColored, colored });

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
    envFilters.push((n: string, l: Level) => n.includes(name) && l >= lvl);
    envFiltersMap.set(name, lvl);
  }

  let combinedFilters: Filter[];
  if (opts?.filters !== undefined) {
    dbg('defaultHandler: using filters from options and env filters', { envFiltersMap });
    const baseFilters = opts.filters;
    combinedFilters = Array.isArray(baseFilters) ? [...baseFilters] : [baseFilters];
    combinedFilters.push(...envFilters);
  } else if (envFilters.length > 0) {
    dbg('defaultHandler: using only env filters', envFiltersMap);
    combinedFilters = [...envFilters];
  } else {
    dbg('defaultHandler: no filters defined, using match-all');
    combinedFilters = [/./];
  }

  let ret: Handler;
  if (useJson) {
    ret = new JsonHandler({
      output,
      level: baseLevel,
      filters: combinedFilters,
      alwaysAddTrace,
    });
  } else if (colored) {
    ret = new PrettyHandler({
      output,
      level: baseLevel,
      filters: combinedFilters,
      colors: true,
      alwaysAddTrace,
    });
  } else {
    ret = new ConsoleHandler({
      output,
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

/**
 * Converts a logger specification to a {@link Logger}.
 *
 * A {@link Handler} is wrapped in a new logger chain. An existing
 * {@link Logger} is returned unchanged, so `defaultName` and `opts` do not
 * affect it.
 *
 * A supported level name or exact {@link Level} value creates a default
 * handler at that level. An unsupported value falls back to `opts`, the
 * environment, or {@link Level.INFO}. An absent value creates a default
 * handler from `opts` and the environment.
 *
 * A dotted `defaultName` creates the same hierarchy as repeated
 * {@link Logger.child} calls.
 */
export function resolveLogger(
  spec?: Logger | Handler | string | number,
  defaultName: string[] | string = ['nebius.default'],
  opts?: HandlerOpts,
): Logger {
  dbg('resolveLogger: called', { spec, defaultName, opts });
  if (typeof defaultName === 'string') {
    defaultName = defaultName.split('.').filter((x) => x.length > 0);
  }
  if (spec && typeof (spec as Logger).getHandler === 'function') {
    dbg('resolveLogger: spec is already a Logger');
    return spec as Logger;
  }

  if (spec && typeof (spec as Handler).log === 'function') {
    dbg('resolveLogger: spec is a Handler');
    return loggerChain(spec as Handler, defaultName);
  }

  if (typeof spec === 'string' || typeof spec === 'number') {
    dbg('resolveLogger: spec is a level string/number');
    const lvl = parseLevel(spec as string | number);
    const handler = defaultHandler({
      output: opts?.output,
      level: lvl ?? opts?.level,
      filters: opts?.filters,
      colored: opts?.colored,
      alwaysAddTrace: opts?.alwaysAddTrace,
      useJson: opts?.useJson,
    });
    return loggerChain(handler, defaultName);
  }
  dbg('resolveLogger: spec is empty or unrecognized');

  const handler = defaultHandler({
    output: opts?.output,
    level: opts?.level,
    filters: opts?.filters,
    colored: opts?.colored,
    alwaysAddTrace: opts?.alwaysAddTrace,
    useJson: opts?.useJson,
  });
  return loggerChain(handler, defaultName);
}

class NoopHandler implements Handler {
  log(_level: Level, _message: string, _args: Argument, _name: string, _traceLevel: number): void {}
}
/** Discards all log records without side effects. */
export const noopHandler: Handler = new NoopHandler();

/**
 * Writes structured records through a shared {@link Handler}.
 *
 * Logger instances are lightweight. Use {@link child} for a component below
 * the current name, {@link withFields} for fields shared by later records, and
 * {@link detached} for an independent full name.
 *
 * Do not add bearer tokens, private keys, or other secrets as fields. Text
 * handlers inspect ordinary objects, and JSON handlers only redact values that
 * define a safe {@link customJson} method.
 *
 * @example
 * ```ts
 * import { resolveLogger } from '@nebius/js-sdk/runtime/util/logging';
 *
 * const logger = resolveLogger('INFO', 'example.application');
 * const requestLogger = logger.child('request', { requestId: 'req-1' });
 * const error = new Error('connection closed');
 * requestLogger.info('Sending request', { attempt: 1 });
 * requestLogger.error('Request failed', { error }, true);
 * ```
 */
export class Logger {
  /**
   * Creates a logger.
   *
   * Most applications should use {@link resolveLogger}. A logger without a
   * handler uses {@link noopHandler}.
   */
  constructor(
    private handler: Handler = noopHandler,
    private name: string = 'default',
    private withFieldsArg: Argument = {},
    private parent?: Logger,
    /**
     * Adds a call-site trace to this logger's named-level methods by default.
     *
     * {@link child}, {@link sibling}, and {@link detached} do not inherit this
     * value.
     */
    public traceByDefault: boolean = false,
  ) {}

  /** Returns a concise representation for text inspection. */
  [custom](): string {
    return `Logger(name=${this.name}, handler=${inspect(this.handler)})`;
  }
  /** Returns a JSON-safe value for logs. */
  [customJson](): object {
    return {
      $type: 'Logger',
      name: this.name,
      handler: inspectJson(this.handler),
    };
  }

  /** Returns the full logger name. */
  get getName(): string {
    return this.name;
  }

  /** Writes an informational record. Set `withTrace` to add a call-site trace. */
  info(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.INFO, message, args ?? {}, withTrace);
  }

  /** Writes a warning record. Set `withTrace` to add a call-site trace. */
  warn(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.WARN, message, args ?? {}, withTrace);
  }

  /** Writes an error record. Set `withTrace` to add a call-site trace. */
  error(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.ERROR, message, args ?? {}, withTrace);
  }

  /** Writes a debug record. Set `withTrace` to add a call-site trace. */
  debug(message: string, args?: Argument, withTrace?: boolean) {
    this._log(Level.DEBUG, message, args ?? {}, withTrace);
  }

  /** Writes a trace-level record. Set `withTrace` to add a call-site trace. */
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

  /**
   * Writes a record at an explicit level.
   *
   * If `withTrace` is absent, this method does not add a call-site trace. It
   * does not use {@link traceByDefault}. The named-level methods use that
   * default when `withTrace` is absent.
   */
  log(level: Level, message: string, args?: Argument, withTrace?: boolean) {
    this._log(level, message, args ?? {}, !!withTrace);
  }

  /**
   * Returns a logger with additional fields and the same name.
   *
   * New fields replace existing fields with the same keys. The method copies
   * only top-level fields. Later top-level changes to the input object do not
   * change the returned logger, but nested objects and arrays stay shared. The
   * returned logger inherits this logger's `traceByDefault` value unless the
   * `traceByDefault` argument supplies another value.
   */
  withFields(fields: Argument, traceByDefault?: boolean): Logger {
    return new Logger(
      this.handler,
      this.name,
      { ...this.withFieldsArg, ...fields },
      this.parent,
      traceByDefault !== undefined ? traceByDefault : this.traceByDefault,
    );
  }

  /**
   * Returns a logger with an independent full name.
   *
   * The new logger uses the same handler but does not inherit this logger's
   * fields. It keeps `additionalArguments` by reference. Later changes to that
   * object change fields written by the detached logger.
   */
  detached(
    name: string,
    additionalArguments: Argument = {},
    traceByDefault: boolean = false,
  ): Logger {
    return new Logger(this.handler, name, additionalArguments, this, traceByDefault);
  }

  /**
   * Returns a logger whose name is this name plus `.` and the suffix.
   *
   * The child inherits this logger's fields. Its `traceByDefault` value is
   * independent and defaults to `false`.
   */
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

  /**
   * Returns a logger beside this logger in the name hierarchy.
   *
   * The sibling keeps this logger's fields. If this logger has no parent, the
   * supplied name becomes the complete logger name.
   */
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

  /** Returns the log handler. */
  get getHandler(): Handler {
    return this.handler;
  }
}
