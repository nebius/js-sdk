import { Bearer, Receiver, Token } from '../token';
import type { AuthorizationOptions } from '../authorization/provider';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

class FileReceiver extends Receiver {
  constructor(private readonly filePath: string) {
    super();
  }

  protected async _fetch(
    _timeoutMs?: number,
    _options?: AuthorizationOptions | undefined,
  ): Promise<Token> {
    const p = resolve(this.filePath.replace(/^~\//, `${process.env.HOME || ''}/`));
    const content = (await readFile(p, 'utf8')).trim();
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
    this.filePath = filePath;
  }

  receiver(): Receiver {
    return new FileReceiver(this.filePath);
  }
}
