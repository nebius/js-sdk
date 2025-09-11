import { readFile } from 'fs/promises';

import type { AuthorizationOptions } from '../authorization/provider';
import { Bearer, Receiver, Token } from '../token';
import { resolveHomeDir } from '../util/path';

class FileReceiver extends Receiver {
  constructor(private readonly filePath: string) {
    super();
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
  private readonly filePath: string;
  constructor(filePath: string) {
    super();
    this.filePath = resolveHomeDir(filePath);
  }

  receiver(): Receiver {
    return new FileReceiver(this.filePath);
  }
}
