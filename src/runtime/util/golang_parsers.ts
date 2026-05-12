const durationUnitsMs: Record<string, number> = {
  h: 60 * 60 * 1000,
  m: 60 * 1000,
  ms: 1,
  ns: 1 / 1_000_000,
  s: 1000,
  us: 1 / 1000,
  µs: 1 / 1000,
  μs: 1 / 1000,
};

export class GolangDurationParser {
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
    const token = /(?:\d+(?:\.\d*)?|\.\d+)(?:ns|us|µs|μs|ms|s|m|h)/y;
    while (index < input.length) {
      token.lastIndex = index;
      const match = token.exec(input);
      if (!match) {
        throw new Error(`parse ${name}: invalid duration ${JSON.stringify(value)}`);
      }
      const part = match[0];
      const unitMatch = part.match(/(ns|us|µs|μs|ms|s|m|h)$/);
      if (!unitMatch) {
        throw new Error(`parse ${name}: invalid duration ${JSON.stringify(value)}`);
      }
      const unit = unitMatch[1];
      const amount = Number(part.slice(0, part.length - unit.length));
      if (!Number.isFinite(amount)) {
        throw new Error(`parse ${name}: invalid duration ${JSON.stringify(value)}`);
      }
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

export class GolangBoolParser {
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
