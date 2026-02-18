import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import Long from 'long';

dayjs.extend(durationPlugin as any);

// When set, keeps generated test artifacts (src/generated_test) after the test suite finishes.
// Legacy flag: SKIP_WKT_CLEANUP (kept for backward compatibility)
// New flag: KEEP_GENERATED_TEST (preferred, more explicit)
export const SKIP_WKT_CLEANUP = !!process.env.SKIP_WKT_CLEANUP;
export const KEEP_GENERATED_TEST =
  !!process.env.KEEP_GENERATED_TEST || !!process.env.NEBIUS_KEEP_GENERATED_TEST;
export const ROOT = path.resolve(__dirname, '../..');
export const PROTO_DIR = path.join(ROOT, 'nebius-api/nebius/example/test');
export const PROTO_FILE = path.join(PROTO_DIR, 'test.proto');
export const GENERATED_TS = 'src/generated_test/1';
export const GENERATED_NB = 'src/generated_test/2';

function run(cmd: string, cwd: string) {
  try {
    return execSync(cmd, { cwd, stdio: 'pipe', encoding: 'utf8' });
  } catch (e: any) {
    const out = (e?.stdout ?? '').toString();
    const err = (e?.stderr ?? '').toString();
    console.error(`Command failed: ${cmd}\nCWD: ${cwd}\nSTDOUT:\n${out}\nSTDERR:\n${err}`);
    throw e;
  }
}

function resolveBufBin(): string {
  const candidates = [
    path.join(ROOT, 'node_modules/.bin/buf'),
    path.join(ROOT, 'node_modules/@bufbuild/buf/bin/buf'),
  ];
  try {
    const pkgDir = path.dirname(require.resolve('@bufbuild/buf/package.json', { paths: [ROOT] }));
    candidates.unshift(path.join(pkgDir, 'bin/buf'));
  } catch {}
  for (const p of candidates) if (fs.existsSync(p)) return p;
  throw new Error(`buf binary not found. Tried: ${candidates.join(', ')}`);
}

const TEST_PROTO = `syntax = "proto3";
package nebius.example.test;

import "google/protobuf/timestamp.proto";
import "google/protobuf/duration.proto";
import "google/protobuf/field_mask.proto";
import "google/protobuf/any.proto";
import "google/protobuf/struct.proto";
import "google/protobuf/empty.proto";
import "nebius/annotations.proto";
import "nebius/common/v1/metadata.proto";

// Enum PlainColor leading comment line A
// Enum PlainColor leading comment line B
enum PlainColor {
    PLAIN_COLOR_UNSPECIFIED = 0; // unspecified color value
    RED = 1; // red value trailing
    GREEN = 2; /* green block trailing */
    BLUE = 3; // blue value trailing
}

// Detached enum docs
// (aliased state) detached second line

// Inline leading for AliasedState
enum AliasedState {
    option allow_alias = true; // allow alias option trailing
    ALIASED_STATE_UNSPECIFIED = 0; // unspecified state
    ON = 1; // on state
    ENABLED = 1; // enabled alias
    OFF = 2; // off state
    DISABLED = 2; // disabled alias
}

// DETACHED A
// DETACHED B

// Leading AllWkts message comment line 1
// Leading AllWkts message comment line 2
message AllWkts {
    string id = 1; // ID field trailing
    google.protobuf.Timestamp ts = 2; // timestamp leading
    google.protobuf.Duration dur = 3; // duration value trailing
    google.protobuf.FieldMask mask = 4; // mask field trailing
    google.protobuf.Any any = 5; // any field trailing
    google.protobuf.Struct struct = 6; // struct field trailing
    google.protobuf.Value value = 7; // value field trailing
    google.protobuf.ListValue list = 8; // list field trailing
    repeated google.protobuf.Timestamp ts_list = 9; // repeated ts trailing
    map<string, google.protobuf.Duration> dur_map = 10; // map field trailing
    // Choice oneof leading
    oneof choice {
        google.protobuf.Any any_oneof = 11; // any choice
        google.protobuf.Timestamp ts_oneof = 12; // ts choice
        string s_oneof = 13; // s choice
    }
    nebius.common.v1.ResourceMetadata meta = 14; // meta field trailing
    google.protobuf.Empty empty = 15; // empty field trailing
    PlainColor color = 16; // color field trailing
    repeated PlainColor color_list = 17; // color list field trailing
    AliasedState state = 18; // state field trailing
    repeated AliasedState state_list = 19; // state list field trailing
    map<string, AliasedState> state_map = 20; // state map field trailing
}

// Payload message leading comment
message Payload {
    string name = 1; // payload name trailing
    int32 count = 2; // payload count trailing
}

message CrossMessage { // CrossMessage trailing after brace
    string title = 1; // title trailing
    AllWkts wkts = 2; // wkts trailing
    repeated Payload items = 3; // items trailing
    map<string, Payload> item_map = 4; // item_map trailing
    // pick oneof leading
    oneof pick {
        Payload payload_oneof = 5; // payload pick choice
        int64 id_oneof = 6; // id pick choice
    }
    PlainColor top_color = 7; // top color trailing
    AliasedState top_state = 8; // top state trailing
    repeated PlainColor top_color_list = 9; // top color list trailing
    repeated AliasedState top_state_list = 10; // top state list trailing
    map<string, PlainColor> top_color_map = 11; // top color map trailing
    map<string, AliasedState> top_state_map = 12; // top state map trailing
}

message Scalars {
    double f_double = 1; // double trailing
    float f_float = 2; // float trailing
    int32 f_int32 = 3; // int32 trailing
    int64 f_int64 = 4; // int64 trailing
    uint32 f_uint32 = 5; // uint32 trailing
    uint64 f_uint64 = 6; // uint64 trailing
    sint32 f_sint32 = 7; // sint32 trailing
    sint64 f_sint64 = 8; // sint64 trailing
    fixed32 f_fixed32 = 9; // fixed32 trailing
    fixed64 f_fixed64 = 10; // fixed64 trailing
    sfixed32 f_sfixed32 = 11; // sfixed32 trailing
    sfixed64 f_sfixed64 = 12; // sfixed64 trailing
    bool f_bool = 13; // bool trailing
    string f_string = 14; // string trailing
    bytes f_bytes = 15; // bytes trailing
}

message RepeatedScalars {
    repeated double r_double = 1; // repeated double trailing
    repeated float r_float = 2; // repeated float trailing
    repeated int32 r_int32 = 3; // repeated int32 trailing
    repeated int64 r_int64 = 4; // repeated int64 trailing
    repeated uint32 r_uint32 = 5; // repeated uint32 trailing
    repeated uint64 r_uint64 = 6; // repeated uint64 trailing
    repeated sint32 r_sint32 = 7; // repeated sint32 trailing
    repeated sint64 r_sint64 = 8; // repeated sint64 trailing
    repeated fixed32 r_fixed32 = 9; // repeated fixed32 trailing
    repeated fixed64 r_fixed64 = 10; // repeated fixed64 trailing
    repeated sfixed32 r_sfixed32 = 11; // repeated sfixed32 trailing
    repeated sfixed64 r_sfixed64 = 12; // repeated sfixed64 trailing
    repeated bool r_bool = 13; // repeated bool trailing
    repeated string r_string = 14; // repeated string trailing
    repeated bytes r_bytes = 15; // repeated bytes trailing
}

message MapExamples {
    map<string, string> s_s = 1; // map string->string trailing
    map<string, int32> s_i32 = 2; // map string->int32 trailing
    map<int32, string> i32_s = 3; // map int32->string trailing
    map<bool, int64> b_i64 = 4; // map bool->int64 trailing
    map<uint64, Payload> u64_payload = 5; // map uint64->payload trailing
}

message Optionals {
    optional string opt_string = 1; // optional string trailing
    optional int32 opt_int32 = 2; // optional int32 trailing
    optional int64 opt_int64 = 3; // optional int64 trailing
    optional uint64 opt_uint64 = 4; // optional uint64 trailing
    optional bool opt_bool = 5; // optional bool trailing
    optional bytes opt_bytes = 6; // optional bytes trailing
    optional AliasedState opt_state = 7; // optional state trailing
}

// Demonstrates sensitive and credentials sanitization for generator inspectors
message SanitizeDemo {
  string plain = 1;
  string secret = 2 [(nebius.sensitive) = true];
  string creds = 3 [(nebius.credentials) = true];
  repeated string creds_list = 4 [(nebius.credentials) = true];
  map<string, string> creds_map = 5 [(nebius.credentials) = true];
}

service BehaviorService {
  rpc Update(Payload) returns (Payload);
  rpc UpdateWithUpdater(Payload) returns (Payload) {
    option (nebius.method_behavior) = METHOD_UPDATER;
  }
  rpc UpdateWithoutUpdater(Payload) returns (Payload) {
    option (nebius.method_behavior) = METHOD_PAGINATED;
  }
  rpc UpdateMixed(Payload) returns (Payload) {
    option (nebius.method_behavior) = METHOD_PAGINATED;
    option (nebius.method_behavior) = METHOD_UPDATER;
  }
  rpc Create(Payload) returns (Payload);
}
`;

const EXT_PROTO = `syntax = "proto3";
package nebius.example.test;

import "google/protobuf/descriptor.proto";
import "google/protobuf/duration.proto";
import "google/protobuf/timestamp.proto";

message ExtraInfo { string note = 1; }
message ExtMsg { string s = 1; }
enum ExtEnum { EXT_ENUM_UNSPECIFIED = 0; A = 1; B = 2; }

extend google.protobuf.FieldOptions {
  ExtraInfo extra_info = 1199;
  int32 ext_i32 = 1200;
  int64 ext_i64 = 1201;
  uint32 ext_u32 = 1202;
  uint64 ext_u64 = 1203;
  sint32 ext_s32 = 1204;
  sint64 ext_s64 = 1205;
  fixed32 ext_f32 = 1206;
  fixed64 ext_f64 = 1207;
  sfixed32 ext_sf32 = 1208;
  sfixed64 ext_sf64 = 1209;
  float ext_float = 1210;
  double ext_double = 1211;
  bool ext_bool = 1212;
  string ext_string = 1213;
  bytes ext_bytes = 1214;
  ExtEnum ext_enum = 1215;
  ExtMsg ext_msg = 1216;
  google.protobuf.Duration ext_duration = 1217;
  repeated int32 rep_i32 = 1250;
  repeated string rep_string = 1251;
  repeated bytes rep_bytes = 1252;
  repeated ExtEnum rep_enum = 1253;
  repeated ExtMsg rep_msg = 1254;
  repeated google.protobuf.Timestamp rep_timestamps = 1255;
}

message UsesExtension { string id = 1 [(extra_info).note = "hello-ext"]; }
`;

// these functions are strictly synchronous
// you must not add other test suits using these functions, add any tests
// to the wkt_compat.test.ts suite
export function ensureProto() {
  fs.mkdirSync(PROTO_DIR, { recursive: true });
  try {
    if (fs.existsSync(PROTO_FILE)) fs.unlinkSync(PROTO_FILE);
  } catch {}
  fs.writeFileSync(PROTO_FILE, TEST_PROTO, 'utf8');
  // Also write an extension proto (ext_test.proto) to exercise option extensions in a single generation pass.
  const extProtoPath = path.join(PROTO_DIR, 'ext_test.proto');

  try {
    if (fs.existsSync(extProtoPath)) fs.unlinkSync(extProtoPath);
  } catch {}
  fs.writeFileSync(extProtoPath, EXT_PROTO, 'utf8');
}

// these functions are strictly synchronous
// you must not add other test suits using these functions, add any tests
// to the wkt_compat.test.ts suite
export function runBufGenerateOnce() {
  if ((global as any).__WKT_GEN_DONE__) return; // idempotent across test files
  const lockPath = path.join(ROOT, 'generated_test.lock');
  let fd: number | undefined;
  for (;;) {
    try {
      fd = fs.openSync(lockPath, 'wx');
      break;
    } catch {
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
    }
  }
  try {
    run('npm run --silent build:scripts', ROOT);
    for (const p of [
      path.join(ROOT, 'dist-scripts/scripts/protoc-gen-nebius-ts-sdk.js'),
      path.join(ROOT, 'dist-scripts/scripts/protoc-gen-nebius-ts.js'),
    ]) {
      if (fs.existsSync(p)) {
        try {
          fs.chmodSync(p, 0o755);
        } catch {}
      }
    }
    const bufBin = resolveBufBin();
    run(`${bufBin} generate --template buf.gen.test.yaml nebius-api`, ROOT);
    run(`${process.execPath} dist-scripts/scripts/version-gen.js`, ROOT);
    (global as any).__WKT_GEN_DONE__ = true;
  } finally {
    if (fd !== undefined) {
      try {
        fs.closeSync(fd);
      } catch {}
      try {
        fs.unlinkSync(lockPath);
      } catch {}
    }
  }
}

export function requireOur() {
  const dir = path.join(ROOT, GENERATED_NB, 'nebius/example/test');
  const p = path.join(dir, 'index');
  // If generation artifacts are missing (e.g., helper used in an isolated test run without
  // invoking wkt_compat.test.ts beforeAll), perform on-demand proto write + generation.
  if (!fs.existsSync(dir)) {
    try {
      ensureProto();
    } catch {
      /* ignore */
    }
    try {
      runBufGenerateOnce();
    } catch (e) {
      throw new Error(`attempted on-demand generation but failed: ${(e as Error)?.message}`);
    }
  }
  if (!fs.existsSync(dir)) {
    throw new Error(`our generated dir not found after generation attempt: ${dir}`);
  }
  return require(p);
}

export function requireBoth() {
  const our = requireOur();
  const tpDir = path.join(ROOT, GENERATED_TS, 'nebius/example/test');
  if (!fs.existsSync(tpDir)) throw new Error(`ts-proto generated dir not found: ${tpDir}`);
  const tpFile = (
    fs.readdirSync(tpDir).find((f) => f.replace(/\.(ts|js)$/i, '') === 'test') ||
    fs.readdirSync(tpDir)[0]
  ).replace(/\.(ts|js)$/i, '');
  const tp = require(path.join(tpDir, tpFile));
  return { our, tp };
}

export function cleanupGenerated() {
  try {
    if (fs.existsSync(PROTO_FILE)) fs.unlinkSync(PROTO_FILE);
  } catch {}
  // remove dynamically generated ext proto
  try {
    const extProtoPath = path.join(PROTO_DIR, 'ext_test.proto');
    if (fs.existsSync(extProtoPath)) fs.unlinkSync(extProtoPath);
  } catch {}
  // Skip removal if either legacy or new keep flags set
  if (!(SKIP_WKT_CLEANUP || KEEP_GENERATED_TEST)) {
    try {
      fs.rmSync(path.join(ROOT, 'src/generated_test'), { recursive: true, force: true });
    } catch {}
  }
}

export function indexOfSubarray(hay: Uint8Array, needle: number[]): number {
  outer: for (let i = 0; i <= hay.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (hay[i + j] !== needle[j]) continue outer;
    }
    return i;
  }
  return -1;
}

export function parseDurationMs(s: string): number {
  const m = s.match(/^(-)?(?:(\d+)(?:\.(\d{1,9}))?)s$/i);
  if (!m) return 0;
  const neg = !!m[1];
  const whole = Number(m[2] || 0);
  const frac = (m[3] || '').padEnd(9, '0').slice(0, 9);
  const nanos = Number(frac);
  const ms = whole * 1000 + Math.floor(nanos / 1_000_000);
  return neg ? -ms : ms;
}

export { dayjs, Long };
