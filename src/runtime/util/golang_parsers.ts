const durationUnitsMs = {
  h: 60 * 60 * 1000,
  m: 60 * 1000,
  ms: 1,
  ns: 1 / 1_000_000,
  s: 1000,
  us: 1 / 1000,
  µs: 1 / 1000,
  μs: 1 / 1000,
} as const;

type DurationUnit = keyof typeof durationUnitsMs;

/**
 * Parses duration strings that use Go's `time.Duration` syntax.
 *
 * The SDK uses this parser for CLI-compatible configuration values.
 */
export class GolangDurationParser {
  /**
   * Converts a duration to a non-negative integer number of milliseconds.
   *
   * A value can join several units, for example `1h30m` or `250ms`. Supported
   * units are `h`, `m`, `s`, `ms`, `us`, `µs`, `μs`, and `ns`. A positive
   * sub-millisecond duration rounds up to 1 ms.
   *
   * @param name Identifies the setting in error messages.
   * @throws `Error` if the value is empty, negative, or invalid.
   */
  static parseMs(name: string, value: string): number {
    const trimmed = value.trim();
    if (trimmed === '') {
      throw new Error(`${name} is empty`);
    }
    if (trimmed === '0') {
      return 0;
    }

    let sign = 1;
    let input = trimmed;
    if (input.startsWith('+') || input.startsWith('-')) {
      sign = input.startsWith('-') ? -1 : 1;
      input = input.slice(1);
    }
    if (input === '') {
      throw new Error(`parse ${name}: invalid duration ${JSON.stringify(value)}`);
    }

    let index = 0;
    let totalMs = 0;
    const token = /(\d+(?:\.\d*)?|\.\d+)(ns|us|µs|μs|ms|s|m|h)/y;
    while (index < input.length) {
      token.lastIndex = index;
      const match = token.exec(input);
      if (!match) {
        throw new Error(`parse ${name}: invalid duration ${JSON.stringify(value)}`);
      }
      const amount = Number(match[1]);
      if (!Number.isFinite(amount)) {
        throw new Error(`parse ${name}: invalid duration ${JSON.stringify(value)}`);
      }
      const unit = match[2] as DurationUnit;
      totalMs += amount * durationUnitsMs[unit];
      index = token.lastIndex;
    }

    totalMs *= sign;
    if (totalMs < 0) {
      throw new Error(`${name} must not be negative`);
    }
    const rounded = Math.round(totalMs);
    return totalMs > 0 && rounded === 0 ? 1 : rounded;
  }
}

/** Parses Boolean strings accepted by Go's `strconv.ParseBool`. */
export class GolangBoolParser {
  /**
   * Parses a Go-compatible Boolean value.
   *
   * Accepted true values are `1`, `t`, `T`, `TRUE`, `true`, and `True`.
   * Accepted false values use the same forms for `0` or `f`.
   *
   * @param name Identifies the setting in error messages.
   * @throws `Error` if the trimmed value is not an accepted form.
   */
  static parse(name: string, value: string): boolean {
    switch (value.trim()) {
      case '1':
      case 't':
      case 'T':
      case 'TRUE':
      case 'true':
      case 'True':
        return true;
      case '0':
      case 'f':
      case 'F':
      case 'FALSE':
      case 'false':
      case 'False':
        return false;
      default:
        throw new Error(`parse ${name}: invalid boolean ${JSON.stringify(value)}`);
    }
  }
}
