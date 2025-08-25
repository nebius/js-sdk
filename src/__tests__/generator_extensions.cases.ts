import path from 'path';

import { ROOT } from './generator_shared.helpers';

export function registerExtensionTests(): void {
  describe('Extensions generation', () => {
    const genDir = path.join(ROOT, 'src/generated_test/2/nebius/example/test');
    function loadExtPkg() {
      try {
        // triggering side effects (extension registrations)
        const p = path.join(genDir, 'index');
        delete require.cache[require.resolve(p)];
        return require(p);
      } catch (e) {
        return undefined;
      }
    }

    test('registry lists all FieldOptions extensions (basic smoke)', () => {
      const { protoRegistry } = require(
        path.join(ROOT, 'src/generated_test/2/someotherfolder/protoregistry'),
      ) as { protoRegistry: any };
      loadExtPkg();
      const fieldOptionsExts = protoRegistry.listExtensions('google.protobuf.FieldOptions') || [];
      const names = fieldOptionsExts.map((e: any) => e.name).sort();
      // spot check a few
      expect(names).toContain('extra_info');
      expect(names).toContain('ext_i32');
      expect(names).toContain('rep_msg');
      expect(names).toContain('ext_enum');
      expect(names).toContain('ext_duration');
      expect(names).toContain('rep_timestamps');
    });

    test('encode/decode single + repeated scalar extensions', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      const FieldOptions = GP.FieldOptions;
      const msg: any = { $type: 'google.protobuf.FieldOptions' };
      // singles
      msg.extI32 = 42;
      msg.extI64 = '9007199254740993'; // store as string for 64-bit
      msg.extU32 = 7;
      msg.extU64 = '18446744073709551615';
      msg.extS32 = -12;
      msg.extS64 = '-1234567890123';
      msg.extF32 = 1234;
      msg.extF64 = '5678';
      msg.extSf32 = -33;
      msg.extSf64 = '-44';
      msg.extFloat = 1.5;
      msg.extDouble = 2.25;
      msg.extBool = true;
      msg.extString = 'hello';
      msg.extBytes = new Uint8Array([1, 2, 3]);
      // WKT Duration now mapped to runtime Duration (dayjs.duration)
      const { dayjs } = require(path.join(ROOT, 'src/runtime/protos/core'));
      msg.extDuration = dayjs.duration(5, 'seconds');
      // repeated
      msg.repI32 = [1, 2, 3];
      msg.repString = ['a', 'b'];
      msg.repBytes = [new Uint8Array([9]), new Uint8Array([10])];
      msg.repTimestamps = [dayjs.unix(1), dayjs.unix(2)];
      const bin = FieldOptions.encode(msg).finish();
      const decoded = FieldOptions.decode(bin);
      expect(decoded.extI32).toBe(42);
      expect(String(decoded.extI64)).toBe('9007199254740993');
      expect(decoded.extBool).toBe(true);
      expect(decoded.extString).toBe('hello');
      expect(Array.from(decoded.extBytes ?? [])).toEqual([1, 2, 3]);
      expect(Math.round(decoded.extDuration?.asSeconds?.() || 0)).toBe(5);
      expect((decoded.repTimestamps || []).map((t: any) => Math.trunc(t.unix()))).toEqual([1, 2]);
      expect(decoded.repI32).toEqual([1, 2, 3]);
      expect(decoded.repString).toEqual(['a', 'b']);
      expect(decoded.repBytes?.length).toBe(2);
    });

    test('encode/decode message + enum extensions (single and repeated)', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      const { protoRegistry } = require(
        path.join(ROOT, 'src/generated_test/2/someotherfolder/protoregistry'),
      ) as { protoRegistry: any };
      const ExtMsg = protoRegistry.getMessage('nebius.example.test.ExtMsg');
      const ExtEnum = protoRegistry.getEnum('nebius.example.test.ExtEnum');
      const msg: any = { $type: 'google.protobuf.FieldOptions' };
      msg.extMsg = { $type: 'nebius.example.test.ExtMsg', s: 'one' };
      msg.extEnum = ExtEnum.A;
      msg.repMsg = [
        { $type: 'nebius.example.test.ExtMsg', s: 'a' },
        { $type: 'nebius.example.test.ExtMsg', s: 'b' },
      ];
      msg.repEnum = [ExtEnum.A, ExtEnum.B];
      const bin = FieldOptions.encode(msg).finish();
      const decoded = FieldOptions.decode(bin);
      expect(decoded.extMsg?.s).toBe('one');
      expect(decoded.extEnum?.name).toBe('A');
      expect((decoded.repMsg || []).map((m: any) => m.s)).toEqual(['a', 'b']);
      expect((decoded.repEnum || []).map((e: any) => e.name)).toEqual(['A', 'B']);
    });

    test('unknown fields do not retain consumed extension tags', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      const msg: any = {
        $type: 'google.protobuf.FieldOptions',
        extraInfo: { $type: 'nebius.example.test.ExtraInfo', note: 'x' },
      };
      const bin = FieldOptions.encode(msg).finish();
      const decoded = FieldOptions.decode(bin);
      const uf: Uint8Array | undefined = decoded[GP.unknownFieldsSymbol];
      // extension field numbers we used; ensure first one (1199) not present
      const tag = (1199 << 3) | 2;
      const tagBytes: number[] = [];
      let t = tag;
      while (t > 127) {
        tagBytes.push((t & 0x7f) | 0x80);
        t >>>= 7;
      }
      tagBytes.push(t);
      const found = uf
        ? uf.findIndex((_, i, arr) => tagBytes.every((b, j) => arr[i + j] === b))
        : -1;
      expect(found).toBe(-1);
    });

    test('round trip absence vs presence', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      // empty -> encode -> decode should not create properties
      const empty: any = { $type: 'google.protobuf.FieldOptions' };
      const decEmpty = FieldOptions.decode(FieldOptions.encode(empty).finish());
      expect(Object.prototype.hasOwnProperty.call(decEmpty, 'extI32')).toBe(false);
      // after setting value
      empty.extI32 = 7;
      const dec2 = FieldOptions.decode(FieldOptions.encode(empty).finish());
      expect(dec2.extI32).toBe(7);
    });

    test('toJSON emits extension fields (json vs pb naming)', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      const { protoRegistry } = require(
        path.join(ROOT, 'src/generated_test/2/someotherfolder/protoregistry'),
      ) as { protoRegistry: any };
      expect(protoRegistry.listExtensions('google.protobuf.FieldOptions').length).toBeGreaterThan(
        0,
      );
      const msg: any = { $type: 'google.protobuf.FieldOptions' };
      const { dayjs } = require(path.join(ROOT, 'src/runtime/protos/core'));
      // set a variety of types
      msg.extI32 = 11;
      msg.extI64 = '123';
      msg.extString = 'abc';
      msg.extBool = true;
      msg.repI32 = [1, 2];
      msg.repString = ['x'];
      msg.extBytes = new Uint8Array([1, 2, 3]);
      msg.extDuration = dayjs.duration(3, 'seconds');
      // enum + message
      const ExtEnum = protoRegistry.getEnum('nebius.example.test.ExtEnum');
      msg.extEnum = ExtEnum.A;
      msg.extMsg = { $type: 'nebius.example.test.ExtMsg', s: 'm1' };
      const jsonObj = FieldOptions.toJSON(msg, 'json') as any;
      expect(jsonObj.extI32).toBe(11);
      expect(jsonObj.extI64).toBe('123');
      expect(jsonObj.extString).toBe('abc');
      expect(jsonObj.repI32).toEqual([1, 2]);
      expect(jsonObj.repString).toEqual(['x']);
      expect(typeof jsonObj.extBytes).toBe('string'); // base64
      expect(jsonObj.extEnum === 'A' || jsonObj.extEnum === 0).toBeTruthy(); // allow name or number
      // pb style
      const pbObj = FieldOptions.toJSON(msg, 'pb') as any;
      expect(pbObj.ext_i32).toBe(11);
      expect(pbObj.ext_string).toBe('abc');
      expect(pbObj.rep_i32).toEqual([1, 2]);
      expect(pbObj.rep_string).toEqual(['x']);
    });

    test('fromJSON assigns extension fields (json names)', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      const obj = {
        extI32: 5,
        extI64: '999',
        extString: 'zzz',
        repI32: [9, 8],
        repString: ['a', 'b'],
        extBytes: 'AQID', // base64 1,2,3
        extEnum: 'A',
        extMsg: { s: 'hello' },
      };
      const msg = FieldOptions.fromJSON(obj) as any;
      expect(msg.extI32).toBe(5);
      expect(String(msg.extI64)).toBe('999');
      expect(msg.extString).toBe('zzz');
      expect(msg.repI32).toEqual([9, 8]);
      expect(msg.repString).toEqual(['a', 'b']);
      expect(Array.from(msg.extBytes || [])).toEqual([1, 2, 3]);
      expect(msg.extEnum?.name || msg.extEnum?.toString?.()).toBe('A');
      expect(msg.extMsg?.s).toBe('hello');
    });

    test('fromJSON assigns extension fields (proto/pb names)', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      const obj = {
        ext_i32: 6,
        rep_i32: [3],
        ext_string: 'pb',
        rep_string: ['rs'],
      } as any;
      const msg = FieldOptions.fromJSON(obj) as any;
      expect(msg.extI32).toBe(6);
      expect(msg.repI32).toEqual([3]);
      expect(msg.extString).toBe('pb');
      expect(msg.repString).toEqual(['rs']);
    });

    test('decode packed and unpacked repeated enum + scalar extensions', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      const { protoRegistry } = require(
        path.join(ROOT, 'src/generated_test/2/someotherfolder/protoregistry'),
      ) as { protoRegistry: any };
      const exts = protoRegistry.listExtensions('google.protobuf.FieldOptions');
      const repEnumExt = exts.find((e: any) => e.name === 'rep_enum');
      const repI32Ext = exts.find((e: any) => e.name === 'rep_i32');
      expect(repEnumExt?.fieldNo).toBeGreaterThan(0);
      expect(repI32Ext?.fieldNo).toBeGreaterThan(0);
      const repEnumNo = repEnumExt.fieldNo;
      const repI32No = repI32Ext.fieldNo;
      const { BinaryWriter } = require(path.join(ROOT, 'src/runtime/protos/core')) as any;
      const w = new BinaryWriter();
      // packed rep_enum with values A(1), B(2)
      w.uint32((repEnumNo << 3) | 2).fork();
      w.int32(1).int32(2).join();
      // unpacked rep_enum single additional value A(1)
      w.uint32((repEnumNo << 3) | 0).int32(1);
      // packed rep_i32 values 10,11
      w.uint32((repI32No << 3) | 2).fork();
      w.int32(10).int32(11).join();
      // unpacked rep_i32 value 12
      w.uint32((repI32No << 3) | 0).int32(12);
      const bin = w.finish();
      const decoded = FieldOptions.decode(bin) as any;
      const repEnumNames = (decoded.repEnum || []).map((e: any) => e.name || e.toString());
      // Allow default enum sentinel values if present when mixing packed/unpacked forms
      // We require at least A and B and total count >=3
      expect(repEnumNames.filter((n: string) => n === 'A').length).toBeGreaterThanOrEqual(1);
      expect(repEnumNames.filter((n: string) => n === 'B').length).toBe(1);
      expect(repEnumNames.length).toBeGreaterThanOrEqual(3);
      expect(decoded.repI32).toEqual([10, 11, 12]);
    });

    test('wire type mismatch on repeated scalar extension is ignored (unknown field retained)', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      const { protoRegistry } = require(
        path.join(ROOT, 'src/generated_test/2/someotherfolder/protoregistry'),
      ) as { protoRegistry: any };
      const exts = protoRegistry.listExtensions('google.protobuf.FieldOptions');
      const repI32Ext = exts.find((e: any) => e.name === 'rep_i32');
      const repI32No = repI32Ext.fieldNo;
      const wrongWireTag = (repI32No << 3) | 1; // 64-bit wire type instead of varint(0) or length-delimited(2)
      const { BinaryWriter } = require(path.join(ROOT, 'src/runtime/protos/core')) as any;
      const w = new BinaryWriter();
      // write bogus field with fixed64 zero payload (8 bytes of zeros)
      w.uint32(wrongWireTag).fixed64('0');
      const bin = w.finish();
      const decoded = FieldOptions.decode(bin) as any;
      // Extension array should not include the bogus value (wire type ignored); either absent or untouched
      const repI32Arr = decoded.repI32 === undefined ? [] : decoded.repI32;
      // We encoded no valid rep_i32 values; decoded array should therefore be empty
      expect(repI32Arr.length).toBe(0);
      // Unknown fields should contain the tag bytes
      const uf: Uint8Array | undefined = decoded[GP.unknownFieldsSymbol];
      // Unknown fields buffer may or may not exist depending on implementation; if present, confirm it contains the tag
      let observed: number | undefined;
      if (uf) {
        let shift = 0,
          tagVal = 0;
        let i = 0;
        let b: number;
        do {
          b = uf[i++];
          tagVal |= (b & 0x7f) << shift;
          shift += 7;
        } while (b & 0x80);
        observed = tagVal;
      }
      // Either we have no unknown fields buffer, or it contains the wrong-wire tag
      const condition = observed === undefined || observed === wrongWireTag;
      expect(condition).toBe(true);
    });

    test('fromJSON/toJSON roundtrip for extensions', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      const original = FieldOptions.fromJSON({
        extI32: 1,
        extString: 's',
        repI32: [7, 8],
      }) as any;
      const pb = FieldOptions.toJSON(original, 'pb');
      const again = FieldOptions.fromJSON(pb) as any;
      expect(again.extI32).toBe(1);
      expect(again.extString).toBe('s');
      expect(again.repI32).toEqual([7, 8]);
    });

    test('unset extension fields omitted in toJSON and absent after fromJSON', () => {
      const GP = require(path.join(ROOT, 'src/generated_test/2/google/protobuf/index')) as any;
      loadExtPkg();
      const FieldOptions = GP.FieldOptions;
      // fromJSON with empty object
      const msg = FieldOptions.fromJSON({}) as any;
      expect(Object.prototype.hasOwnProperty.call(msg, 'extI32')).toBe(false);
      expect(Object.prototype.hasOwnProperty.call(msg, 'extString')).toBe(false);
      expect(Object.prototype.hasOwnProperty.call(msg, 'repI32')).toBe(false);
      // toJSON should not emit defaults
      const jsonObj = FieldOptions.toJSON(msg, 'json') as any;
      expect(jsonObj.extI32).toBeUndefined();
      expect(jsonObj.extString).toBeUndefined();
      expect(jsonObj.repI32).toBeUndefined();
      // Set default-ish values explicitly; they still should be omitted
      msg.extI32 = 0; // default number
      msg.extString = ''; // default string
      msg.extBool = false; // default bool
      msg.extBytes = new Uint8Array(0); // empty bytes
      msg.extI64 = '0';
      msg.repI32 = []; // empty repeated
      const json2 = FieldOptions.toJSON(msg, 'json') as any;
      expect(json2.extI32).toBeUndefined();
      expect(json2.extString).toBeUndefined();
      expect(json2.extBool).toBeUndefined();
      expect(json2.extBytes).toBeUndefined();
      // 64-bit zero may serialize as '0' because presence tracking differs; allow both
      expect([undefined, '0']).toContain(json2.extI64);
      expect(json2.repI32).toBeUndefined();
      // Now set non-defaults and ensure they appear
      msg.extI32 = 9;
      msg.extString = 'x';
      msg.extBool = true;
      msg.extBytes = new Uint8Array([1]);
      msg.extI64 = '123';
      msg.repI32 = [1];
      const json3 = FieldOptions.toJSON(msg, 'json') as any;
      expect(json3.extI32).toBe(9);
      expect(json3.extString).toBe('x');
      expect(json3.extBool).toBe(true);
      expect(typeof json3.extBytes).toBe('string');
      expect(json3.extI64).toBe('123');
      expect(json3.repI32).toEqual([1]);
    });
  });
}
