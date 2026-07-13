import {
  attachMessageDescriptor,
  dayjs,
  type MessageDescriptor,
  wkt,
} from '../runtime/protos/index.js';
import { resetMaskFromMessage } from '../runtime/resetmask.js';

function msg(v: any) {
  return v;
}

const descriptor: MessageDescriptor = {
  fields: {
    anyValue: {
      pbName: 'any_value',
      message: () => wkt['.google.protobuf.Any'].$descriptor,
    },
    createdAt: { pbName: 'created_at' },
    size: {
      pbName: 'size',
      message: () => ({
        fields: {
          sizeGibibytes: { pbName: 'size_gibibytes' },
        },
      }),
    },
    itemMap: {
      pbName: 'item_map',
      mapValue: () => ({
        fields: {
          resetValue: { pbName: 'reset_value' },
        },
      }),
    },
    mask: {
      pbName: 'mask',
      message: () => wkt['.google.protobuf.FieldMask'].$descriptor,
    },
    masks: {
      pbName: 'masks',
      repeated: true,
      message: () => wkt['.google.protobuf.FieldMask'].$descriptor,
    },
    nullValue: {
      pbName: 'null_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    numberValue: {
      pbName: 'number_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    stringValue: {
      pbName: 'string_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    boolValue: {
      pbName: 'bool_value',
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    structValue: {
      pbName: 'struct_value',
      message: () => wkt['.google.protobuf.Struct'].$descriptor,
    },
    listValue: {
      pbName: 'list_value',
      message: () => wkt['.google.protobuf.ListValue'].$descriptor,
    },
    values: {
      pbName: 'values',
      repeated: true,
      message: () => wkt['.google.protobuf.Value'].$descriptor,
    },
    timestamp: {
      pbName: 'timestamp',
      message: () => wkt['.google.protobuf.Timestamp'].$descriptor,
    },
    duration: {
      pbName: 'duration',
      message: () => wkt['.google.protobuf.Duration'].$descriptor,
    },
  },
};

describe('resetMaskFromMessage', () => {
  test('null message', () => {
    expect(resetMaskFromMessage(null)).toBeNull();
    expect(resetMaskFromMessage(undefined as any)).toBeNull();
  });

  test('scalars default are marked', () => {
    const m = msg({ a: 0, b: '', c: false });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('a,b,c');
  });

  test('scalars non-default not marked', () => {
    const m = msg({ a: 1, b: 'x', c: true });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('');
  });

  test('nested object default fields included', () => {
    const m = msg({ user: { name: '', age: 0 } });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('user.(age,name)');
  });

  test('descriptor protobuf field names are used in emitted masks', () => {
    const m = attachMessageDescriptor(
      {
        anyValue: { typeUrl: '', value: new Uint8Array(0) },
        createdAt: undefined,
        itemMap: { a: { resetValue: '' }, b: { resetValue: 'x' } },
        size: { sizeGibibytes: 0 },
      },
      descriptor,
    );
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe(
      'any_value.(type_url,value),created_at,item_map.*.reset_value,size.size_gibibytes',
    );
  });

  test('list empty marks field; list of messages recurses into Any', () => {
    const m1 = msg({ items: [] as any[] });
    const mask1 = resetMaskFromMessage(m1)!;
    expect(mask1.marshal()).toBe('items');

    const m2 = msg({ items: [{ x: 0 }, { y: '' }] });
    const mask2 = resetMaskFromMessage(m2)!;
    expect(mask2.marshal()).toBe('items.*.(x,y)');
  });

  test('map empty marks field; map of messages recurses into Any', () => {
    const m1 = msg({ dict: {} as Record<string, any> });
    const mask1 = resetMaskFromMessage(m1)!;
    expect(mask1.marshal()).toBe('dict');

    const m2 = msg({ dict: { a: { x: 0 }, b: { y: '' } } });
    const mask2 = resetMaskFromMessage(m2)!;
    expect(mask2.marshal()).toBe('dict.*.(x,y)');
  });

  test('non-empty list of messages with no default inner fields still yields wildcard', () => {
    const m = msg({ items: [{ x: 1 }, { x: 2 }] });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('items.*');
  });

  test('non-empty map of messages with no default inner fields still yields wildcard', () => {
    const m = msg({ dict: { a: { x: 1 }, b: { x: 2 } } });
    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('dict.*');
  });

  test('non-empty list/map of scalars not marked', () => {
    const m1 = msg({ nums: [0, 1] });
    const m2 = msg({ labels: { a: 'x' } });
    const rm1 = resetMaskFromMessage(m1)!;
    const rm2 = resetMaskFromMessage(m2)!;
    expect(rm1.marshal()).toBe('');
    expect(rm2.marshal()).toBe('');
  });

  test('WKT fields use protobuf structure behind JS surface types', () => {
    const m = attachMessageDescriptor(
      {
        mask: [],
        masks: [[], ['a']],
        nullValue: null,
        numberValue: 0,
        stringValue: '',
        boolValue: false,
        structValue: {},
        listValue: [],
        values: [0, 'x', false, { a: '' }, []],
      },
      descriptor,
    );

    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe(
      'bool_value.bool_value,list_value.values,mask.paths,masks.*.paths,' +
        'null_value.null_value,number_value.number_value,string_value.string_value,' +
        'struct_value.fields,values.*.(bool_value,list_value.values,number_value,' +
        'struct_value.fields.*.string_value)',
    );
  });

  test('Timestamp and Duration WKT fields expose seconds/nanos defaults', () => {
    const m = attachMessageDescriptor(
      {
        timestamp: dayjs('1970-01-01T00:00:01.000Z'),
        duration: dayjs.duration(0, 'milliseconds'),
      },
      descriptor,
    );

    const mask = resetMaskFromMessage(m)!;
    expect(mask.marshal()).toBe('duration.(nanos,seconds),timestamp.nanos');
  });
});
