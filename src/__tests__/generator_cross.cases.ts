import Long from 'long';

import { dayjs, requireBoth } from './generator_shared.helpers';

export function registerCrossCompatTests() {
  describe('cross-compat serialization', () => {
    test('json encode/decode roundtrip between generators', () => {
      const { our, tp } = requireBoth();

      const now = dayjs('2024-01-02T03:04:05.006Z');
      const durMs = 90123; // 90.123s

      const wkt: any = {
        $type: 'nebius.example.test.AllWkts',
        id: 'abc',
        ts: now,
        dur: dayjs.duration(durMs, 'milliseconds'),
        mask: ['a.b', 'c'],
        any: {
          typeUrl: 'type.googleapis.com/google.protobuf.Empty',
          value: new Uint8Array([1, 2, 3]),
        },
        struct: { a: 1, b: 'x', c: true, d: null, e: { nested: 2 } },
        value: { foo: 1 },
        list: [1, 'x', true, null, { y: 2 }],
        ts_list: [now, now.add(1, 'hour')],
        dur_map: { k1: dayjs.duration(1000, 'milliseconds') },
        choice: { $case: 'tsOneof', tsOneof: now },
        meta: {
          id: 'res-1',
          parentId: 'parent-1',
          name: 'My Resource',
          resourceVersion: Long.fromNumber(1),
          labels: { env: 'test' },
        },
        empty: {},
        color: our.PlainColor.RED,
        color_list: [our.PlainColor.GREEN, our.PlainColor.BLUE],
        state: our.AliasedState.ON,
        state_list: [our.AliasedState.OFF, our.AliasedState.ON],
        state_map: { k1: our.AliasedState.ON, k2: our.AliasedState.OFF },
      };

      const obj: any = {
        $type: 'nebius.example.test.CrossMessage',
        title: 'hello',
        wkts: wkt,
        items: [{ name: 'p', count: 3 }],
        itemMap: { k: { name: 'x', count: 1 } },
        pick: { $case: 'idOneof', idOneof: Long.fromNumber(123) },
        topColor: our.PlainColor.BLUE,
        topState: our.AliasedState.OFF,
        top_color_list: [our.PlainColor.RED, our.PlainColor.GREEN],
        top_state_list: [our.AliasedState.ON, our.AliasedState.OFF],
        top_color_map: { k1: our.PlainColor.RED, k2: our.PlainColor.BLUE },
        top_state_map: { k1: our.AliasedState.ON, k2: our.AliasedState.OFF },
      };

      // our -> json -> ts-proto
      const ourJson = our.CrossMessage.toJSON(obj);
      const tpFromJson = tp.CrossMessage.fromJSON(ourJson);
      const tpJson = tp.CrossMessage.toJSON(tpFromJson);
      const ourFromTpJson = our.CrossMessage.fromJSON(tpJson);

      expect(ourFromTpJson.title).toBe(obj.title);
      expect(ourFromTpJson.wkts?.id).toBe(wkt.id);

      // FieldMask: our JSON is comma-separated string, ts-proto should accept and roundtrip
      const maskJson = (ourJson.wkts?.mask ?? ourJson.mask) as string | undefined;
      expect(typeof maskJson).toBe('string');
      expect(
        maskJson
          ?.split(',')
          .map((s: string) => s.trim())
          .sort(),
      ).toEqual(['a.b', 'c'].sort());

      // bytes roundtrip between implementations
      const ourBytes = our.CrossMessage.encode(obj).finish();
      const tpFromBytes = tp.CrossMessage.decode(ourBytes);
      const tpBytes = tp.CrossMessage.encode(tpFromBytes).finish();
      const ourFromBytes = our.CrossMessage.decode(tpBytes);

      expect(ourFromBytes.title).toBe(obj.title);
      expect(ourFromBytes.wkts?.ts).toBeDefined();
      expect(ourFromBytes.wkts?.empty).toEqual({});

      // Enum assertions (JSON path)
      expect(ourFromTpJson.wkts?.color?.toNumber?.()).toBe(1);
      expect(ourFromTpJson.wkts?.color?.name).toBe('RED');
      expect(ourFromTpJson.wkts?.state?.toNumber?.()).toBe(1);
      expect(['ON', 'ENABLED']).toContain(ourFromTpJson.wkts?.state?.name);

      // Top-level enums
      expect(ourFromTpJson.topColor?.toNumber?.()).toBe(3);
      expect(ourFromTpJson.topColor?.name).toBe('BLUE');
      expect(ourFromTpJson.topState?.toNumber?.()).toBe(2);
      expect(['OFF', 'DISABLED']).toContain(ourFromTpJson.topState?.name);

      // Enum assertions (bytes path)
      expect(ourFromBytes.wkts?.color?.toNumber?.()).toBe(1);
      expect(ourFromBytes.wkts?.color?.name).toBe('RED');
      expect(ourFromBytes.wkts?.state?.toNumber?.()).toBe(1);
      expect(['ON', 'ENABLED']).toContain(ourFromBytes.wkts?.state?.name);
      expect(ourFromBytes.topColor?.toNumber?.()).toBe(3);
      expect(ourFromBytes.topColor?.name).toBe('BLUE');
      expect(ourFromBytes.topState?.toNumber?.()).toBe(2);
      expect(['OFF', 'DISABLED']).toContain(ourFromBytes.topState?.name);
    });
    test('enum lists/maps handling', () => {
      const { our, tp } = requireBoth();
      const msg: any = {
        $type: 'nebius.example.test.CrossMessage',
        title: 'enums',
        wkts: {
          $type: 'nebius.example.test.AllWkts',
          id: 'e',
          color: our.PlainColor.GREEN,
          colorList: [our.PlainColor.RED, our.PlainColor.BLUE],
          state: our.AliasedState.ENABLED,
          stateList: [our.AliasedState.OFF, our.AliasedState.ON],
          stateMap: { a: our.AliasedState.ON, b: our.AliasedState.DISABLED },
        },
        topColor: our.PlainColor.RED,
        topState: our.AliasedState.DISABLED,
        topColorList: [our.PlainColor.BLUE, our.PlainColor.GREEN],
        topStateList: [our.AliasedState.ON, our.AliasedState.OFF],
        topColorMap: { k1: our.PlainColor.GREEN, k2: our.PlainColor.RED },
        topStateMap: { k1: our.AliasedState.ON, k2: our.AliasedState.DISABLED },
        items: [],
        itemMap: {},
      };
      const j = our.CrossMessage.toJSON(msg);
      const tpMid = tp.CrossMessage.fromJSON(j);
      const back = our.CrossMessage.fromJSON(tp.CrossMessage.toJSON(tpMid));

      // Scalars
      expect(back.wkts?.color?.toNumber?.()).toBe(2);
      expect(back.wkts?.color?.name).toBe('GREEN');
      expect(back.wkts?.state?.toNumber?.()).toBe(1);
      expect(['ON', 'ENABLED']).toContain(back.wkts?.state?.name);
      expect(back.topColor?.toNumber?.()).toBe(1);
      expect(back.topColor?.name).toBe('RED');
      expect(back.topState?.toNumber?.()).toBe(2);
      expect(['OFF', 'DISABLED']).toContain(back.topState?.name);

      // Repeated
      const colorListCodes = (back.wkts?.colorList ?? []).map((x: any) => x.toNumber?.());
      expect(new Set(colorListCodes)).toEqual(new Set([1, 3]));
      const stateListCodes = (back.wkts?.stateList ?? []).map((x: any) => x.toNumber?.());
      expect(new Set(stateListCodes)).toEqual(new Set([1, 2]));
      const topColorListCodes = (back.topColorList ?? []).map((x: any) => x.toNumber?.());
      expect(new Set(topColorListCodes)).toEqual(new Set([2, 3]));
      const topStateListCodes = (back.topStateList ?? []).map((x: any) => x.toNumber?.());
      expect(new Set(topStateListCodes)).toEqual(new Set([1, 2]));

      // Maps
      const stateMapCodes = Object.values(back.wkts?.stateMap ?? {}).map((x: any) =>
        x.toNumber?.(),
      );
      expect(new Set(stateMapCodes)).toEqual(new Set([1, 2]));
      const topColorMapCodes = Object.values(back.topColorMap ?? {}).map((x: any) =>
        x.toNumber?.(),
      );
      expect(new Set(topColorMapCodes)).toEqual(new Set([1, 2]));
      const topStateMapCodes = Object.values(back.topStateMap ?? {}).map((x: any) =>
        x.toNumber?.(),
      );
      expect(new Set(topStateMapCodes)).toEqual(new Set([1, 2]));

      // Bytes path: our -> tp -> our
      const bytes = our.CrossMessage.encode(msg).finish();
      const tpFrom = tp.CrossMessage.decode(bytes);
      const round = our.CrossMessage.decode(tp.CrossMessage.encode(tpFrom).finish());

      expect(round.wkts?.color?.toNumber?.()).toBe(2);
      expect(round.wkts?.color?.name).toBe('GREEN');
      expect(['ON', 'ENABLED']).toContain(round.wkts?.state?.name);
      expect(round.wkts?.state?.toNumber?.()).toBe(1);
      expect(new Set((round.wkts?.colorList ?? []).map((x: any) => x.toNumber?.()))).toEqual(
        new Set([1, 3]),
      );
      expect(new Set((round.wkts?.stateList ?? []).map((x: any) => x.toNumber?.()))).toEqual(
        new Set([1, 2]),
      );
      const stateMapVals = Object.values(round.wkts?.stateMap ?? {}).map((x: any) =>
        x.toNumber?.(),
      );
      expect(new Set(stateMapVals)).toEqual(new Set([1, 2]));

      expect(round.topColor?.toNumber?.()).toBe(1);
      expect(round.topColor?.name).toBe('RED');
      expect(['OFF', 'DISABLED']).toContain(round.topState?.name);
      expect(round.topState?.toNumber?.()).toBe(2);
      expect(new Set((round.topColorList ?? []).map((x: any) => x.toNumber?.()))).toEqual(
        new Set([2, 3]),
      );
      expect(new Set((round.topStateList ?? []).map((x: any) => x.toNumber?.()))).toEqual(
        new Set([1, 2]),
      );
      const topColorVals = Object.values(round.topColorMap ?? {}).map((x: any) => x.toNumber?.());
      expect(new Set(topColorVals)).toEqual(new Set([1, 2]));
      const topStateVals = Object.values(round.topStateMap ?? {}).map((x: any) => x.toNumber?.());
      expect(new Set(topStateVals)).toEqual(new Set([1, 2]));
    });
    test('idOneof Long extremes', () => {
      const { our, tp } = requireBoth();
      for (const val of [
        Long.fromString('9223372036854775807'),
        Long.fromString('-9223372036854775808'),
        Long.fromNumber(0),
      ]) {
        const jsonIn = our.CrossMessage.toJSON({
          $type: 'nebius.example.test.CrossMessage',
          title: 'L',
          items: [],
          itemMap: {},
          pick: { $case: 'idOneof', idOneof: val },
        });
        const jsonOut = tp.CrossMessage.toJSON(tp.CrossMessage.fromJSON(jsonIn)) as any;
        expect(jsonOut.idOneof).toBe(val.toString());
      }
    });
    test('FieldMask variants roundtrip', () => {
      const { our, tp } = requireBoth();
      const obj: any = {
        $type: 'nebius.example.test.CrossMessage',
        title: 'm',
        wkts: { $type: 'nebius.example.test.AllWkts', id: 'i', mask: ['x.y', 'a', 'b.c.d'] },
        items: [],
        itemMap: {},
      };
      const ourJson: any = our.CrossMessage.toJSON(obj);
      const tpJson: any = tp.CrossMessage.toJSON(tp.CrossMessage.fromJSON(ourJson));
      expect(typeof ourJson.wkts.mask).toBe('string');
      const tpMaskVal = tpJson?.wkts?.mask as string | string[] | undefined;
      const tpMaskArr = Array.isArray(tpMaskVal)
        ? tpMaskVal
        : typeof tpMaskVal === 'string'
          ? tpMaskVal
              .split(',')
              .map((s: string) => s.trim())
              .filter(Boolean)
          : [];
      expect([...(tpMaskArr ?? [])].sort()).toEqual(['x.y', 'a', 'b.c.d'].sort());
    });
    test('presence vs defaults', () => {
      const { our, tp } = requireBoth();
      const base: any = {
        $type: 'nebius.example.test.CrossMessage',
        title: '',
        items: [],
        itemMap: {},
      };
      const enc1 = our.CrossMessage.encode(base).finish();
      const dec1 = tp.CrossMessage.decode(enc1);
      const enc2 = tp.CrossMessage.encode(dec1).finish();
      const r1 = our.CrossMessage.decode(enc2);
      expect(r1.wkts).toBeUndefined();
    });
    test('multi-entry ts_list and dur_map', () => {
      const { our, tp } = requireBoth();
      const t0 = dayjs('2024-01-02T03:04:05.006Z');
      const t1 = t0.add(1, 'minute');
      const d0 = dayjs.duration(1234, 'milliseconds');
      const d1 = dayjs.duration(9876543, 'milliseconds');

      const obj: any = {
        $type: 'nebius.example.test.CrossMessage',
        title: 'ts-dur',
        wkts: {
          $type: 'nebius.example.test.AllWkts',
          id: 'i',
          tsList: [t0, t1],
          durMap: { a: d0, b: d1 },
        },
        items: [],
        itemMap: {},
      };

      const j = our.CrossMessage.toJSON(obj) as any;
      expect(Array.isArray(j?.wkts?.tsList)).toBe(true);
      expect(j.wkts.tsList?.length).toBe(2);
      expect(typeof j.wkts?.durMap?.a).toBe('string');
      expect(typeof j.wkts?.durMap?.b).toBe('string');

      const toDurObj = (s: string) => {
        const m = s.match(/^(-)?(?:(\d+)(?:\.(\d{1,9}))?)s$/i);
        if (!m) return { seconds: '0', nanos: 0 };
        const neg = !!m[1];
        const whole = Number(m[2] || 0);
        const fracStr = (m[3] || '').padEnd(9, '0').slice(0, 9);
        let seconds = whole;
        let nanos = Number(fracStr);
        if (neg) {
          seconds = -seconds;
          nanos = -nanos;
          if (seconds === 0 && nanos > 0) nanos = -nanos;
        }
        return { seconds: String(seconds), nanos };
      };
      const jTp = JSON.parse(JSON.stringify(j));
      if (jTp?.wkts?.durMap && typeof jTp.wkts.durMap === 'object') {
        for (const [k, v] of Object.entries(jTp.wkts.durMap)) {
          if (typeof v === 'string') jTp.wkts.durMap[k] = toDurObj(v);
        }
      }

      const tpMid = tp.CrossMessage.fromJSON(jTp);
      const back = our.CrossMessage.fromJSON(tp.CrossMessage.toJSON(tpMid));
      expect(back.wkts?.tsList?.length).toBe(2);
      expect(back.wkts?.tsList?.[0]?.toISOString()).toBe(t0.toISOString());
      expect(back.wkts?.tsList?.[1]?.toISOString()).toBe(t1.toISOString());
      expect(back.wkts?.durMap?.a?.asMilliseconds()).toBe(d0.asMilliseconds());
      expect(back.wkts?.durMap?.b?.asMilliseconds()).toBe(d1.asMilliseconds());

      const b = our.CrossMessage.encode(obj).finish();
      const round = our.CrossMessage.decode(
        tp.CrossMessage.encode(tp.CrossMessage.decode(b)).finish(),
      );
      expect(round.wkts?.tsList?.length).toBe(2);
      expect(round.wkts?.tsList?.[0]?.toISOString()).toBe(t0.toISOString());
      expect(round.wkts?.tsList?.[1]?.toISOString()).toBe(t1.toISOString());
      expect(round.wkts?.durMap?.a?.asMilliseconds()).toBe(d0.asMilliseconds());
      expect(round.wkts?.durMap?.b?.asMilliseconds()).toBe(d1.asMilliseconds());
    });
    test('all scalar fields cross-compat', () => {
      const { our, tp } = requireBoth();
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
        fBytes: new Uint8Array([1, 255, 2, 0]),
      };
      const j1 = our.Scalars.toJSON(obj) as any;
      const mid = tp.Scalars.fromJSON(j1);
      const j2 = tp.Scalars.toJSON(mid) as any;
      const back = our.Scalars.fromJSON(j2);

      expect(back.fDouble).toBeCloseTo(obj.fDouble);
      expect(back.fFloat).toBeCloseTo(obj.fFloat);
      expect(back.fInt32).toBe(obj.fInt32);
      expect((back.fInt64 as any)?.toString?.()).toBe(obj.fInt64.toString());
      expect(back.fUint32).toBe(obj.fUint32);
      expect((back.fUint64 as any)?.toString?.()).toBe(obj.fUint64.toString());
      expect(back.fSint32).toBe(obj.fSint32);
      expect((back.fSint64 as any)?.toString?.()).toBe(obj.fSint64.toString());
      expect(back.fFixed32).toBe(obj.fFixed32);
      expect((back.fFixed64 as any)?.toString?.()).toBe(obj.fFixed64.toString());
      expect(back.fSfixed32).toBe(obj.fSfixed32);
      expect((back.fSfixed64 as any)?.toString?.()).toBe(obj.fSfixed64.toString());
      expect(back.fBool).toBe(true);
      expect(back.fString).toBe('hello');
      expect((back.fBytes as Uint8Array)?.length).toBe((obj.fBytes as Uint8Array).length);
      expect(Array.from(back.fBytes as Uint8Array)).toEqual(Array.from(obj.fBytes as Uint8Array));

      const b = our.Scalars.encode(obj).finish();
      const tpMid = tp.Scalars.decode(b);
      const round = our.Scalars.decode(tp.Scalars.encode(tpMid).finish());
      expect(round.fString).toBe('hello');
      expect((round.fInt64 as any).toString()).toBe(obj.fInt64.toString());
      expect((round.fUint64 as any).toString()).toBe(obj.fUint64.toString());
      expect(Array.from(round.fBytes as Uint8Array)).toEqual(Array.from(obj.fBytes as Uint8Array));
    });
    test('repeated scalars cross-compat', () => {
      const { our, tp } = requireBoth();
      const obj: any = {
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

      const j = our.RepeatedScalars.toJSON(obj) as any;
      const back = our.RepeatedScalars.fromJSON(
        tp.RepeatedScalars.toJSON(tp.RepeatedScalars.fromJSON(j)),
      );

      const toStr = (x: any) => (typeof x?.toString === 'function' ? x.toString() : String(x));
      expect(back.rString).toEqual(['a', 'b']);
      expect(new Set((back.rInt64 ?? []).map(toStr))).toEqual(new Set(['-1', '2']));
      expect(new Set((back.rUint64 ?? []).map(toStr))).toEqual(new Set(['1', '2']));
      expect(new Set((back.rBytes ?? []).map((u: Uint8Array) => Array.from(u).join(',')))).toEqual(
        new Set(['1,2', '3']),
      );

      const ourBytes = our.RepeatedScalars.encode(obj).finish();
      const tpDecoded = tp.RepeatedScalars.decode(ourBytes);
      const tpBytes = tp.RepeatedScalars.encode(tpDecoded).finish();
      const rb = our.RepeatedScalars.decode(tpBytes);
      expect(rb.rString).toEqual(['a', 'b']);
      expect(new Set(rb.rInt32 ?? [])).toEqual(new Set([-1, 2]));
      expect(new Set(rb.rBool ?? [])).toEqual(new Set([true, false]));
    });
    test('map fields cross-compat', () => {
      const { our, tp } = requireBoth();
      const obj: any = {
        $type: 'nebius.example.test.MapExamples',
        sS: { a: 'x', b: 'y' },
        sI32: { k1: 1, k2: -2 },
        i32S: { '1': 'one', '-2': 'minus-two' },
        bI64: { true: Long.fromString('1'), '': Long.fromString('2') },
        u64Payload: { '123': { name: 'n', count: 7 }, '456': { name: 'm', count: 8 } },
      };
      const j = our.MapExamples.toJSON(obj) as any;
      const back = our.MapExamples.fromJSON(tp.MapExamples.toJSON(tp.MapExamples.fromJSON(j)));
      expect(back.sS?.a).toBe('x');
      expect(back.sI32?.k1).toBe(1);
      expect(back.i32S?.['1']).toBe('one');
      expect((back.bI64?.['true'] as any).toString()).toBe('1');
      expect(back.u64Payload?.['123']?.name).toBe('n');

      const ourMapBytes = our.MapExamples.encode(obj).finish();
      const tpMapDecoded = tp.MapExamples.decode(ourMapBytes);
      const tpMapBytes = tp.MapExamples.encode(tpMapDecoded).finish();
      const rb = our.MapExamples.decode(tpMapBytes);
      expect(rb.sS?.b).toBe('y');
      expect(rb.i32S?.['-2']).toBe('minus-two');
      expect((rb.bI64?.['false'] as any).toString()).toBe('2');
      expect(rb.u64Payload?.['456']?.count).toBe(8);
    });
    test('proto3 optionals cross-compat', () => {
      const { our, tp } = requireBoth();
      const base: any = { $type: 'nebius.example.test.Optionals' };
      const j0 = our.Optionals.toJSON(base) as any;
      expect(j0.optString).toBeUndefined();
      expect(j0.optInt32).toBeUndefined();
      expect(j0.optInt64).toBeUndefined();
      expect(j0.optUint64).toBeUndefined();
      expect(j0.optBool).toBeUndefined();
      expect(j0.optBytes).toBeUndefined();
      expect(j0.optState).toBeUndefined();

      const obj: any = {
        $type: 'nebius.example.test.Optionals',
        optString: 'z',
        optInt32: -3,
        optInt64: Long.fromString('-3'),
        optUint64: Long.fromString('3'),
        optBool: true,
        optBytes: new Uint8Array([9, 8, 7]),
        optState: our.AliasedState.ON,
      };

      const j = our.Optionals.toJSON(obj) as any;
      expect(j.optString).toBe('z');
      expect(j.optInt32).toBe(-3);
      expect(j.optInt64).toBe('-3');
      expect(j.optUint64).toBe('3');
      expect(j.optBool).toBe(true);
      expect(typeof j.optBytes).toBe('string');
      expect(['ON', 'ENABLED']).toContain(j.optState);

      const back = our.Optionals.fromJSON(tp.Optionals.toJSON(tp.Optionals.fromJSON(j)));
      expect(back.optString).toBe('z');
      expect(back.optInt32).toBe(-3);
      expect((back.optInt64 as any).toString()).toBe('-3');
      expect((back.optUint64 as any).toString()).toBe('3');
      expect(back.optBool).toBe(true);
      expect(Array.from(back.optBytes as Uint8Array)).toEqual([9, 8, 7]);
      expect(['ON', 'ENABLED']).toContain((back.optState as any).name);

      const ourOptBytes = our.Optionals.encode(obj).finish();
      const tpOptDecoded = tp.Optionals.decode(ourOptBytes);
      const tpOptBytes = tp.Optionals.encode(tpOptDecoded).finish();
      const rb = our.Optionals.decode(tpOptBytes);
      expect(rb.optString).toBe('z');
      expect((rb.optInt64 as any).toString()).toBe('-3');
      expect(['ON', 'ENABLED']).toContain((rb.optState as any).name);
    });
  });
}
