import path from 'node:path';

import Long from 'long';

import {
  dayjs,
  indexOfSubarray,
  parseDurationMs,
  requireOur,
  ROOT,
} from './generator_shared.helpers';

export function registerSelfCompatTests() {
  describe('self-compat serialization', () => {
    test('generated comments presence (leading/trailing/detached/oneof)', () => {
      const fs = require('node:fs');
      const path = require('node:path');
      const { ROOT, GENERATED_NB } = require('./generator_shared.helpers');
      const dir = path.join(ROOT, GENERATED_NB, 'nebius/example/test');
      const file = path.join(dir, 'index.ts');
      expect(fs.existsSync(file)).toBe(true);
      const txt = fs.readFileSync(file, 'utf8');
      // Leading message comment
      expect(txt).toContain('Leading AllWkts message comment line 1');
      // Detached enum docs
      expect(txt).toContain('Detached enum docs');
      // Field level comment (emitted as JSDoc above property)
      expect(txt).toContain('ID field trailing');
      // Oneof comment
      expect(txt).toContain('Choice oneof leading');
      // Enum value comments (now emitted as JSDoc blocks inside createEnum literal)
      expect(txt).toContain('red value trailing');
      expect(txt).toContain('green block trailing');
      // Optional field trailing comment (presence in interface JSDoc + property line)
      expect(txt).toContain('optional string trailing');
      expect(txt).toContain('optString?');
    });
    test('enum value runtime metadata comments', () => {
      const { ENUM_VALUE_META } = require(path.join(ROOT, 'src/runtime/protos/index'));
      const our: any = requireOur();
      // PlainColor.RED comment
      expect((our.PlainColor.RED as any)[ENUM_VALUE_META]?.comment).toMatch(/red value trailing/i);
      // PlainColor.GREEN block trailing
      expect((our.PlainColor.GREEN as any)[ENUM_VALUE_META]?.comment).toMatch(
        /green block trailing/i,
      );
      // AliasedState.ENABLED alias comment
      expect((our.AliasedState.ENABLED as any)[ENUM_VALUE_META]?.comment).toMatch(/enabled alias/i);
      // Value without explicit comment should be undefined (if any). Use UNRECOGNIZED sentinel.
      expect((our.PlainColor.UNRECOGNIZED as any)[ENUM_VALUE_META]).toBeUndefined();
    });
    test('decode from bytes literal (CrossMessage minimal)', () => {
      const our: any = requireOur();
      const BYTES = Uint8Array.from([
        0x0a, 0x05, 0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x1a, 0x05, 0x0a, 0x01, 0x70, 0x10, 0x03, 0x38,
        0x03, 0x40, 0x02,
      ]);
      const msg = our.CrossMessage.decode(BYTES);
      expect(msg.title).toBe('hello');
      expect(Array.isArray(msg.items)).toBe(true);
      expect(msg.items?.length).toBe(1);
      expect(msg.items?.[0]?.name).toBe('p');
      expect(msg.items?.[0]?.count).toBe(3);
      expect(msg.topColor?.toNumber?.()).toBe(3);
      expect(msg.topColor?.name).toBe('BLUE');
      expect(msg.topState?.toNumber?.()).toBe(2);
      expect(['OFF', 'DISABLED']).toContain(msg.topState?.name);
    });

    test('unknown fields of various wire types are captured', () => {
      const our: any = requireOur();
      const { unknownFieldsSymbol } = require(path.join(ROOT, 'src/runtime/protos/index'));

      // Known field: title (field 1, wire type 2) => tag 0x0a
      const known = [0x0a, 0x01, 0x41]; // title = 'A'

      // Unknown fields we will append (raw encoded):
      // Use high field numbers (>=1000) to avoid colliding with any real fields
      // Helper: encode tag varint for field N and wire type W.
      const encTag = (n: number, w: number) => {
        const v = (n << 3) | w;
        const out: number[] = [];
        let x = v >>> 0;
        while (x >= 0x80) {
          out.push((x & 0x7f) | 0x80);
          x = x >>> 7;
        }
        out.push(x & 0x7f);
        return out;
      };

      // 1) varint, small value (field 1000, wire type 0)
      const unk_varint_small = [...encTag(1000, 0), 0x03];
      // 2) varint, multi-byte value (field 1001, wire type 0) value 300 => [0xAC, 0x02]
      const unk_varint_large = [...encTag(1001, 0), 0xac, 0x02];
      // 3) length-delimited / bytes (field 1002, wire type 2) => len 3, bytes 0x01,0x02,0x03
      const unk_bytes = [...encTag(1002, 2), 0x03, 0x01, 0x02, 0x03];

      const BYTES = Uint8Array.from([
        ...known,
        ...unk_varint_small,
        ...unk_varint_large,
        ...unk_bytes,
      ]);

      const msg = our.CrossMessage.decode(BYTES);
      // Known field should still be present
      expect(msg.title).toBe('A');

      // Unknown bytes should be attached under the runtime symbol
      const attached: Uint8Array | undefined = (msg as any)[unknownFieldsSymbol];
      expect(attached).toBeDefined();
      expect(attached instanceof Uint8Array).toBe(true);

      // Note: generator captures the raw bytes of the skipped field payloads (it starts
      // slicing after the tag has already been consumed), so expected should exclude
      // the tag varint bytes and only contain the value/length+value bytes.
      const expected = Uint8Array.from([
        ...encTag(1000, 0),
        0x03,
        ...encTag(1001, 0),
        0xac,
        0x02,
        ...encTag(1002, 2),
        0x03,
        0x01,
        0x02,
        0x03,
      ]);

      // The runtime concatenates unknown parts in encountered order; compare arrays
      expect(Array.from(attached!)).toEqual(Array.from(expected));
    });
    test('unknown fields captured when decoding from BinaryReader (skip returns bytes)', () => {
      const our: any = requireOur();
      const { unknownFieldsSymbol } = require(path.join(ROOT, 'src/runtime/protos/index'));

      const encTag = (n: number, w: number) => {
        const v = (n << 3) | w;
        const out: number[] = [];
        let x = v >>> 0;
        while (x >= 0x80) {
          out.push((x & 0x7f) | 0x80);
          x = x >>> 7;
        }
        out.push(x & 0x7f);
        return out;
      };

      // build bytes as before: known title + unknown varint
      const known = [0x0a, 0x01, 0x42]; // title = 'B'
      const unk = [...encTag(2000, 0), 0x7f];
      const BYTES = Uint8Array.from([...known, ...unk]);

      // Use BinaryReader explicitly to hit the skip-returning path
      const { BinaryReader } = require(path.join(ROOT, 'src/runtime/protos/index'));
      const reader = new BinaryReader(BYTES);
      const msg = our.CrossMessage.decode(reader);

      expect(msg.title).toBe('B');
      const attached: Uint8Array | undefined = (msg as any)[unknownFieldsSymbol];
      expect(attached).toBeDefined();
      expect(Array.from(attached!)).toEqual(
        Array.from(Uint8Array.from([...encTag(2000, 0), 0x7f])),
      );
    });

    test('unknown fixed32/fixed64 fields are captured (tag+value)', () => {
      const our: any = requireOur();
      const { unknownFieldsSymbol } = require(path.join(ROOT, 'src/runtime/protos/index'));
      const encTag = (n: number, w: number) => {
        const v = (n << 3) | w;
        const out: number[] = [];
        let x = v >>> 0;
        while (x >= 0x80) {
          out.push((x & 0x7f) | 0x80);
          x = x >>> 7;
        }
        out.push(x & 0x7f);
        return out;
      };

      const known = [0x0a, 0x01, 0x43]; // title = 'C'
      // fixed32 (wire type 5) -> 4 bytes little-endian, use 0x01,0x02,0x03,0x04
      const unk32 = [...encTag(3000, 5), 0x01, 0x02, 0x03, 0x04];
      // fixed64 (wire type 1) -> 8 bytes little-endian
      const unk64 = [...encTag(3001, 1), 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08];

      const BYTES = Uint8Array.from([...known, ...unk32, ...unk64]);
      const msg = our.CrossMessage.decode(BYTES);
      expect(msg.title).toBe('C');
      const attached: Uint8Array | undefined = (msg as any)[unknownFieldsSymbol];
      expect(attached).toBeDefined();
      // Expected concatenation of tag+payload for both unknowns
      const expected = Uint8Array.from([...unk32, ...unk64]);
      expect(Array.from(attached!)).toEqual(Array.from(expected));
    });
    test('encode and inspect raw bytes', () => {
      const our: any = requireOur();
      const obj: any = {
        $type: 'nebius.example.test.CrossMessage',
        title: 'x',
        items: [{ name: 'n', count: 7 }],
        itemMap: {},
        topColor: our.PlainColor.RED,
        topState: our.AliasedState.ON,
      };
      const b = our.CrossMessage.encode(obj).finish();
      // raw bytes should contain the title field (tag + length + 'x')
      expect(indexOfSubarray(b, [0x0a, 0x01, 0x78])).toBeGreaterThanOrEqual(0);
      // decode and verify enums and fields survive encoding
      const dec = our.CrossMessage.decode(b);
      expect(dec.title).toBe('x');
      expect(dec.topColor).toBe(our.PlainColor.RED);
      expect(dec.topState?.toNumber?.()).toBe(our.AliasedState.ON?.toNumber?.());
    });
    test('same-system CrossMessage roundtrip', () => {
      const our: any = requireOur();
      const now = dayjs('2024-01-02T03:04:05.006Z');
      const dur = dayjs.duration(90123, 'milliseconds');
      const obj: any = {
        $type: 'nebius.example.test.CrossMessage',
        title: 'hello',
        wkts: {
          $type: 'nebius.example.test.AllWkts',
          id: 'abc',
          ts: now,
          dur,
          mask: ['a.b', 'c'],
          any: {
            typeUrl: 'type.googleapis.com/google.protobuf.Empty',
            value: new Uint8Array([1, 2, 3]),
          },
          struct: {},
          value: { z: 1 },
          list: [1, 'x', true, null, { y: 2 }],
          tsList: [now, now.add(1, 'hour')],
          durMap: { k1: dayjs.duration(1000, 'ms') },
          choice: { $case: 'tsOneof', tsOneof: now },
          empty: {},
          color: our.PlainColor.GREEN,
          state: our.AliasedState.OFF,
        },
        items: [{ name: 'p', count: 3 }],
        pick: { $case: 'idOneof', idOneof: Long.fromNumber(123) },
        topColor: our.PlainColor.BLUE,
        topState: our.AliasedState.ON,
      };
      const back = our.CrossMessage.decode(our.CrossMessage.encode(obj).finish());
      // Basic string
      expect(back.title).toBe('hello');
      // WKTs
      expect(back.wkts).toBeTruthy();
      expect(back.wkts.id).toBe('abc');
      expect(back.wkts.ts?.toISOString?.()).toBe(now.toISOString());
      // duration equality (ms)
      expect(back.wkts.dur.asMilliseconds()).toBe(dur.asMilliseconds());
      // mask/list/struct/any/value
      expect(back.wkts.mask).toEqual(['a.b', 'c']);
      expect(back.wkts.any?.typeUrl).toBe('type.googleapis.com/google.protobuf.Empty');
      expect(Array.from(back.wkts.any?.value || new Uint8Array())).toEqual([1, 2, 3]);
      expect(back.wkts.struct).toEqual({});
      expect(back.wkts.value).toEqual({ z: 1 });
      expect(back.wkts.list).toEqual([1, 'x', true, null, { y: 2 }]);
      // repeated timestamps and duration map
      expect(back.wkts.tsList).toHaveLength(2);
      expect(back.wkts.tsList[0].toISOString()).toBe(now.toISOString());
      expect(back.wkts.tsList[1].toISOString()).toBe(now.add(1, 'hour').toISOString());
      expect(back.wkts.durMap?.k1.asMilliseconds()).toBe(1000);
      // oneof
      expect(back.wkts.choice?.$case).toBe('tsOneof');
      expect(back.wkts.choice.tsOneof.toISOString()).toBe(now.toISOString());
      // enums and simple fields
      expect(back.wkts.color).toBe(our.PlainColor.GREEN);
      expect(back.wkts.state?.toNumber?.()).toBe(our.AliasedState.OFF?.toNumber?.());
      expect(back.items).toHaveLength(1);
      expect(back.items[0].name).toBe('p');
      // pick oneof
      expect(back.pick?.$case).toBe('idOneof');
      expect(back.pick.idOneof.toString()).toBe(Long.fromNumber(123).toString());
      // top-level enums
      expect(back.topColor).toBe(our.PlainColor.BLUE);
      expect(back.topState?.toNumber?.()).toBe(our.AliasedState.ON?.toNumber?.());
    });
    test('Scalars roundtrip', () => {
      const our: any = requireOur();
      const bytes = new Uint8Array([1, 255, 2, 0]);
      const obj: any = {
        $type: 'nebius.example.test.Scalars',
        fDouble: 1.5,
        fFloat: 2.25,
        fInt32: -123,
        fInt64: Long.fromString('-9007199254740992'),
        fUint32: 4000000000 - 0,
        fUint64: Long.fromString('9007199254740993'),
        fSint32: -321,
        fSint64: Long.fromString('-1234567890123'),
        fFixed32: 1234567890,
        fFixed64: Long.fromString('12345678901234'),
        fSfixed32: -2147483648,
        fSfixed64: Long.fromString('-9223372036854775808'),
        fBool: true,
        fString: 'hello',
        fBytes: bytes,
      };
      const round = our.Scalars.decode(our.Scalars.encode(obj).finish());
      expect(round.fString).toBe('hello');
      expect((round.fInt64 as any).toString()).toBe(obj.fInt64.toString());
      expect((round.fUint64 as any).toString()).toBe(obj.fUint64.toString());
      expect(Array.from(round.fBytes as Uint8Array)).toEqual(Array.from(bytes));
    });
    test('Repeated + Map roundtrip', () => {
      const our: any = requireOur();
      const rep: any = {
        $type: 'nebius.example.test.RepeatedScalars',
        rDouble: [1, 2.5],
        rFloat: [3.25, 4.5],
        rInt32: [-1, 2],
        rInt64: [Long.fromString('-1'), Long.fromString('2')],
        rUint32: [1, 2],
        rUint64: [Long.fromString('1'), Long.fromString('2')],
        rSint32: [-5, 5],
        rSint64: [Long.fromString('-5'), Long.fromString('5')],
        rFixed32: [10, 20],
        rFixed64: [Long.fromString('10'), Long.fromString('20')],
        rSfixed32: [-10, 0],
        rSfixed64: [Long.fromString('-10'), Long.fromString('0')],
        rBool: [true, false],
        rString: ['a', 'b'],
        rBytes: [new Uint8Array([1, 2]), new Uint8Array([3])],
      };
      const rb = our.RepeatedScalars.decode(our.RepeatedScalars.encode(rep).finish());
      expect(rb.rString).toEqual(['a', 'b']);
      expect(new Set(rb.rInt32 ?? [])).toEqual(new Set([-1, 2]));
      expect(new Set(rb.rBool ?? [])).toEqual(new Set([true, false]));
      const maps: any = {
        $type: 'nebius.example.test.MapExamples',
        sS: { a: 'x', b: 'y' },
        sI32: { k1: 1, k2: -2 },
        i32S: { '1': 'one', '-2': 'minus-two' },
        bI64: { true: Long.fromString('1'), '': Long.fromString('2') },
        u64Payload: { '123': { name: 'n', count: 7 }, '456': { name: 'm', count: 8 } },
      };
      const mb = our.MapExamples.decode(our.MapExamples.encode(maps).finish());
      expect(mb.sS?.a).toBe('x');
      expect(mb.i32S?.['-2']).toBe('minus-two');
      expect((mb.bI64?.['false'] as any).toString()).toBe('2');
      expect(mb.u64Payload?.['456']?.count).toBe(8);
    });
    test('JSON shape acceptance', () => {
      const our: any = requireOur();
      const now = dayjs('2024-01-02T03:04:05.006Z');
      const dur = dayjs.duration(90_123, 'ms');
      const obj: any = {
        $type: 'nebius.example.test.CrossMessage',
        title: 'json',
        wkts: {
          $type: 'nebius.example.test.AllWkts',
          id: 'id1',
          ts: now,
          dur,
          mask: ['a.b', 'c'],
          struct: { a: 1 },
          value: { foo: 1 },
          list: [1, 'x', true, null, { y: 2 }],
          durMap: { a: dayjs.duration(1234, 'ms') },
          tsList: [now, now.add(1, 'minute')],
          any: { typeUrl: 'type.googleapis.com/google.protobuf.Empty', value: new Uint8Array() },
          color: our.PlainColor.BLUE,
          state: our.AliasedState.ENABLED,
        },
        items: [{ name: 'n', count: 1 }],
        pick: { $case: 'idOneof', idOneof: Long.fromNumber(42) },
        topColor: our.PlainColor.BLUE,
        topState: our.AliasedState.OFF,
      };
      const j: any = our.CrossMessage.toJSON(obj);
      // Timestamp and Duration emitted as strings
      expect(typeof j?.wkts?.ts).toBe('string');
      expect(new Date(j.wkts.ts).toISOString()).toBe(now.toISOString());
      expect(typeof j?.wkts?.dur).toBe('string');
      expect(parseDurationMs(j.wkts.dur)).toBe(dur.asMilliseconds());
      // FieldMask string
      expect(typeof j?.wkts?.mask).toBe('string');
      expect(
        new Set(
          String(j.wkts.mask)
            .split(',')
            .map((s) => s.trim()),
        ),
      ).toEqual(new Set(['a.b', 'c']));
      // Struct, Value, ListValue surface as plain JSON
      expect(j?.wkts?.struct?.a).toBe(1);
      expect(j?.wkts?.value?.foo).toBe(1);
      expect(Array.isArray(j?.wkts?.list)).toBe(true);
      // Enums as strings
      expect(j.topColor).toBe('BLUE');
      expect(['OFF', 'DISABLED']).toContain(j.topState);
      // Longs as strings in JSON
      expect(j.idOneof).toBe('42');

      // Accept alternative JSON shapes: FieldMask as array, Duration as {seconds,nanos}
      const alt: any = JSON.parse(JSON.stringify(j));
      alt.wkts.mask = ['c', 'a.b']; // array form
      const dm = alt.wkts.durMap;
      if (dm && typeof dm === 'object') {
        for (const k of Object.keys(dm)) {
          const s = dm[k];
          if (typeof s === 'string') {
            const ms = parseDurationMs(s);
            alt.wkts.durMap[k] = {
              seconds: String(Math.trunc(ms / 1000)),
              nanos: (ms % 1000) * 1_000_000,
            };
          }
        }
      }
      if (typeof alt.wkts.dur === 'string') {
        const ms = parseDurationMs(alt.wkts.dur);
        alt.wkts.dur = { seconds: String(Math.trunc(ms / 1000)), nanos: (ms % 1000) * 1_000_000 };
      }

      const parsed = our.CrossMessage.fromJSON(alt);
      // Back to JSON canonical
      const back = our.CrossMessage.toJSON(parsed) as any;
      expect(new Date(back.wkts.ts).toISOString()).toBe(now.toISOString());
      expect(parseDurationMs(back.wkts.dur)).toBe(dur.asMilliseconds());
      const maskStr = String(back.wkts.mask);
      expect(new Set(maskStr.split(',').map((s) => s.trim()))).toEqual(new Set(['a.b', 'c']));
      expect(back.topColor).toBe('BLUE');
      expect(['OFF', 'DISABLED']).toContain(back.topState);
    });
    test('fromPartial defaults', () => {
      const our: any = requireOur();
      const msg = our.CrossMessage.fromPartial({
        title: 'pp',
        wkts: { id: 'i', mask: ['x'], color: our.PlainColor.RED, state: our.AliasedState.DISABLED },
        items: [{ name: 'a' }],
        itemMap: { k: { name: 'b' } },
        pick: { $case: 'payloadOneof', payloadOneof: { name: 'y' } },
        topColor: our.PlainColor.GREEN,
        topState: our.AliasedState.ON,
      });
      const round = our.CrossMessage.decode(our.CrossMessage.encode(msg).finish());
      expect(round.title).toBe('pp');
      expect(round.wkts?.id).toBe('i');
      expect(Array.isArray(round.wkts?.mask)).toBe(true);
      expect(round.wkts?.color?.toNumber?.()).toBe(1);
      expect(new Set(Object.keys(round.itemMap ?? {}))).toEqual(new Set(['k']));
      expect(round.items?.[0]?.count).toBe(0);
      expect(round.itemMap?.k?.count).toBe(0);
      expect(round.pick?.$case).toBe('payloadOneof');
      expect(round.pick && (round.pick as any).payloadOneof?.name).toBe('y');
      expect(round.topColor?.toNumber?.()).toBe(2);
      expect(round.topState?.toNumber?.()).toBe(1);
    });
    test('Optionals presence', () => {
      const our: any = requireOur();
      const base = our.Optionals.fromPartial({});
      const j0 = our.Optionals.toJSON(base) as any;
      expect(j0.optString).toBeUndefined();
      expect(j0.optInt32).toBeUndefined();
      expect(j0.optInt64).toBeUndefined();
      expect(j0.optUint64).toBeUndefined();
      expect(j0.optBool).toBeUndefined();
      expect(j0.optBytes).toBeUndefined();
      expect(j0.optState).toBeUndefined();

      const set = our.Optionals.fromPartial({
        optString: 'z',
        optInt32: -3,
        optInt64: Long.fromString('-3'),
        optUint64: '3',
        optBool: true,
        optBytes: new Uint8Array([9, 8, 7]),
        optState: our.AliasedState.ON,
      });
      const js: any = our.Optionals.toJSON(set);
      expect(js.optString).toBe('z');
      expect(js.optInt32).toBe(-3);
      expect(js.optInt64).toBe('-3');
      expect(js.optUint64).toBe('3');
      expect(js.optBool).toBe(true);
      expect(typeof js.optBytes).toBe('string');
      expect(['ON', 'ENABLED']).toContain(js.optState);

      const round = our.Optionals.decode(our.Optionals.encode(set).finish());
      expect((round.optInt64 as any).toString()).toBe('-3');
      expect(['ON', 'ENABLED']).toContain((round.optState as any).name);
    });
    test('Optional vs non-optional scalar JSON omission', () => {
      const our: any = requireOur();
      // Build message with no optional fields set
      const optEmpty = our.Optionals.fromPartial({});
      const optJson = our.Optionals.toJSON(optEmpty) as any;
      // Build Scalars with all default (unset) numeric/string/bool/bytes by fromPartial({})
      const scalarsEmpty = our.Scalars.fromPartial({});
      const scalarsJson = our.Scalars.toJSON(scalarsEmpty) as any;
      // Optional scalars should be omitted entirely (undefined)
      expect(optJson.optString).toBeUndefined();
      expect(optJson.optInt32).toBeUndefined();
      expect(optJson.optInt64).toBeUndefined();
      expect(optJson.optUint64).toBeUndefined();
      expect(optJson.optBool).toBeUndefined();
      expect(optJson.optBytes).toBeUndefined();
      // Non-optional scalars with default values are omitted in JSON (we only emit non-defaults)
      expect(scalarsJson.fString).toBeUndefined();
      expect(scalarsJson.fInt32).toBeUndefined();
      expect(scalarsJson.fInt64).toBeUndefined();
      expect(scalarsJson.fUint64).toBeUndefined();
      expect(scalarsJson.fBool).toBeUndefined();
      expect(scalarsJson.fBytes).toBeUndefined();
      // Now set a single optional field and ensure it appears
      const optSet = our.Optionals.fromPartial({ optInt32: 0 });
      const optSetJson = our.Optionals.toJSON(optSet) as any;
      expect(optSetJson.optInt32).toBe(0);
      // And ensure setting a non-default scalar still appears (already covered elsewhere but sanity)
      const scalarsSet = our.Scalars.fromPartial({ fInt32: 7 });
      const scalarsSetJson = our.Scalars.toJSON(scalarsSet) as any;
      expect(scalarsSetJson.fInt32).toBe(7);

      // Negative case: explicitly setting default scalar values via fromPartial should still omit them in JSON
      const scalarsExplicitDefaults = our.Scalars.fromPartial({
        fInt32: 0,
        fString: '',
        fBool: false,
        fInt64: Long.ZERO,
        fUint64: Long.ZERO,
        fBytes: new Uint8Array(),
      });
      const scalarsExplicitJson = our.Scalars.toJSON(scalarsExplicitDefaults) as any;
      expect(scalarsExplicitJson.fInt32).toBeUndefined();
      expect(scalarsExplicitJson.fString).toBeUndefined();
      expect(scalarsExplicitJson.fBool).toBeUndefined();
      expect(scalarsExplicitJson.fInt64).toBeUndefined();
      expect(scalarsExplicitJson.fUint64).toBeUndefined();
      expect(scalarsExplicitJson.fBytes).toBeUndefined();
    });
    test('Optional default value presence', () => {
      const our: any = requireOur();
      const withDefaults = our.Optionals.fromPartial({
        optInt32: 0,
        optInt64: Long.ZERO,
        optUint64: Long.ZERO,
        optBool: false,
        optString: '',
        optBytes: new Uint8Array(),
        optState: our.AliasedState.ALIASED_STATE_UNSPECIFIED,
      });
      const j = our.Optionals.toJSON(withDefaults) as any;
      expect(j.optInt32).toBe(0);
      expect(j.optInt64).toBe('0');
      expect(j.optUint64).toBe('0');
      expect(j.optBool).toBe(false);
      expect(j.optString).toBe('');
      expect(typeof j.optBytes).toBe('string'); // base64 "" for empty
      // enum default still emitted because presence tracked
      expect(j.optState === 'ALIASED_STATE_UNSPECIFIED' || j.optState === 0).toBe(true);
    });
    // Proto2 descriptor.proto presence semantics:
    // The google.protobuf descriptor file is proto2, so all non-repeated scalar fields track presence.
    // We verify that (1) absent fields are omitted, (2) explicitly set default values are emitted, and
    // (3) explicitly undefined behaves like absence. These tests live here (helper) so they are
    // registered via wkt_compat.test.ts alongside other WKT/presence tests.
    test('proto2 FieldDescriptorProto absent scalars omitted', () => {
      // Load generated google.protobuf module (already generated in beforeAll of main test file)
      const gp: any = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index'));
      const base = gp.FieldDescriptorProto.fromPartial({});
      const j = gp.FieldDescriptorProto.toJSON(base) as any;
      expect(j.name).toBeUndefined();
      expect(j.number).toBeUndefined();
      expect(j.label).toBeUndefined();
      expect(j.type).toBeUndefined();
      expect(j.typeName).toBeUndefined();
    });
    test('proto2 FieldDescriptorProto explicit defaults emitted', () => {
      const gp: any = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index'));
      const msg = gp.FieldDescriptorProto.fromPartial({
        name: '',
        number: 0,
        label: gp.FieldDescriptorProto_Label.LABEL_OPTIONAL,
        type: gp.FieldDescriptorProto_Type.TYPE_DOUBLE,
        typeName: '',
      });
      const j = gp.FieldDescriptorProto.toJSON(msg) as any;
      expect(j.name).toBe('');
      expect(j.number).toBe(0);
      expect(j.label === 'LABEL_OPTIONAL' || j.label === 1).toBe(true);
      expect(j.type === 'TYPE_DOUBLE' || j.type === 1).toBe(true);
      expect(j.typeName).toBe('');
    });
    test('proto2 FieldDescriptorProto explicit undefined equals absence', () => {
      const gp: any = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index'));
      const msg = gp.FieldDescriptorProto.fromPartial({ name: undefined, number: undefined });
      const j = gp.FieldDescriptorProto.toJSON(msg) as any;
      expect(j.name).toBeUndefined();
      expect(j.number).toBeUndefined();
    });
    test('fromJSON mixed FieldMask/Duration formats', () => {
      const our: any = requireOur();
      const now = '2024-01-02T03:04:05.006Z';
      const a = our.CrossMessage.fromJSON({
        title: 'm',
        wkts: { id: 'i', ts: now, dur: '1.234s', mask: ['a', 'b.c'] },
        items: [],
        itemMap: {},
      });
      expect(a.wkts?.ts?.toISOString?.()).toBe(now);
      expect(a.wkts?.dur?.asMilliseconds?.()).toBe(1234);
      expect(new Set(a.wkts?.mask ?? [])).toEqual(new Set(['a', 'b.c']));

      const b = our.CrossMessage.fromJSON({
        title: 'm',
        wkts: {
          id: 'i',
          ts: { seconds: '1704164645', nanos: 6000000 },
          dur: { seconds: '1', nanos: 234000000 },
          mask: 'a, b.c',
        },
        items: [],
        itemMap: {},
      });
      expect(b.wkts?.ts?.toISOString?.()).toBe(now);
      expect(b.wkts?.dur?.asMilliseconds?.()).toBe(1234);
      expect(new Set(b.wkts?.mask ?? [])).toEqual(new Set(['a', 'b.c']));
    });
  });
}
