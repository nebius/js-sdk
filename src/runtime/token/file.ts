import { readFile } from 'fs/promises';

import type { AuthorizationOptions } from '../authorization/provider';
import { Bearer, Receiver, Token } from '../token';
import { custom, customJson } from '../util/logging';
import { resolveHomeDir } from '../util/path';

class FileReceiver extends Receiver {
  public readonly $type = 'nebius.sdk.FileReceiver';
  constructor(private readonly filePath: string) {
    super();
  }
  [custom](): string {
    return `FileReceiver(filePath=${this.filePath})`;
  }
  [customJson](): unknown {
    return {
      type: 'FileReceiver',
      filePath: this.filePath,
    };
  }

  protected async _fetch(
    _timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    const content = (await readFile(this.filePath, 'utf8')).trim();
    if (content === '') throw new Error('empty token file provided');
    return new Token(content);
  }

  canRetry(): boolean {
    return false;
  }
}

export class FileBearer extends Bearer {
  public readonly $type = 'nebius.sdk.FileBearer';
  private readonly filePath: string;
  constructor(filePath: string) {
    super();
    this.filePath = resolveHomeDir(filePath);
  }
  [custom](): string {
    return `FileBearer(filePath=${this.filePath})`;
  }
  [customJson](): unknown {
    return {
      type: 'FileBearer',
      filePath: this.filePath,
    };
  }

  receiver(): Receiver {
    return new FileReceiver(this.filePath);
  }
}
