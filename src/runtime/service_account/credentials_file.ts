import { readFileSync } from 'fs';
import { resolve } from 'path';
import type { Reader } from './service_account';
import { ServiceAccount } from './service_account';

interface SubjectCredentials {
  type?: string; // should be 'JWT' or empty
  alg: string; // must be 'RS256'
  'private-key': string; // PEM
  kid: string; // key id
  iss: string; // issuer
  sub: string; // subject, must equal iss
}

interface ServiceAccountCredentialsFile {
  'subject-credentials': SubjectCredentials;
}

function expandHome(p: string): string {
  return resolve(p.replace(/^~\//, `${process.env.HOME || ''}/`));
}

function validateSubjectCredentials(sc: SubjectCredentials) {
  const type = sc.type ?? '';
  if (type !== '' && type !== 'JWT') {
    throw new Error(`Invalid service account credentials type: '${type}', only 'JWT' is supported.`);
  }
  if (sc.alg !== 'RS256') {
    throw new Error(`Invalid service account algorithm: '${sc.alg}', only 'RS256' is supported.`);
  }
  if (sc.iss !== sc.sub) {
    throw new Error(`Issuer must be the same as subject: '${sc.iss}' != '${sc.sub}'.`);
  }
}

export class CredentialsFileReader implements Reader {
  private readonly sc: SubjectCredentials;
  private readonly pem: string;

  constructor(filename: string) {
    const path = expandHome(filename);
    const raw = readFileSync(path, 'utf8');
    const parsed = JSON.parse(raw) as ServiceAccountCredentialsFile;
    const sc = parsed['subject-credentials'];
    if (!sc) throw new Error('Missing subject-credentials section');
    validateSubjectCredentials(sc);
    this.sc = sc;
    this.pem = sc["private-key"];
  }

  read(): ServiceAccount {
    return new ServiceAccount(this.pem, this.sc.kid, this.sc.sub);
  }

  getExchangeTokenRequest() {
    return this.read().getExchangeTokenRequest();
  }
}
