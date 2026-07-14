import {
  attachMessageDescriptor,
  dayjs,
  Long,
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
          sizeGibibytes: { pbName: 'size_gibibytes', scalarType: 1 },
        },
      }),
    },
    itemMap: {
      pbName: 'item_map',
      mapValue: () => ({
        fields: {
          resetValue: { pbName: 'reset_value', scalarType: 9 },
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

  test('Long handling treats generated scalar values separately from WKT reflection', () => {
    const longDescriptor: MessageDescriptor = {
      fields: {
        resourceVersion: { pbName: 'resource_version', scalarType: 3 },
        duration: {
          pbName: 'duration',
          message: () => wkt['.google.protobuf.Duration'].$descriptor,
        },
      },
    };
    const zero = attachMessageDescriptor({ resourceVersion: Long.ZERO }, longDescriptor);
    const nonZero = attachMessageDescriptor(
      { resourceVersion: Long.fromNumber(1) },
      longDescriptor,
    );
    const duration = attachMessageDescriptor(
      { duration: { seconds: Long.ZERO, nanos: 0 } },
      longDescriptor,
    );

    expect(resetMaskFromMessage(zero)!.marshal()).toBe('resource_version');
    expect(resetMaskFromMessage(nonZero)!.marshal()).toBe('');
    expect(resetMaskFromMessage(duration)!.marshal()).toBe('duration.(nanos,seconds)');
  });

  describe('oneof descriptors', () => {
    const payloadDescriptor: MessageDescriptor = {
      fields: {
        resetValue: { pbName: 'reset_value', scalarType: 9 },
      },
    };
    const choiceDescriptor: MessageDescriptor = {
      fields: {
        textChoice: { pbName: 'text_choice', scalarType: 9 },
        payloadChoice: {
          pbName: 'payload_choice',
          message: () => payloadDescriptor,
        },
      },
    };
    const oneofDescriptor: MessageDescriptor = {
      fields: {
        choice: {
          pbName: 'choice',
          oneof: true,
          message: () => choiceDescriptor,
        },
      },
    };

    test.each([
      [
        'selected default scalar',
        { choice: { $case: 'textChoice', textChoice: '' } },
        'payload_choice,text_choice',
      ],
      [
        'selected non-default scalar',
        { choice: { $case: 'textChoice', textChoice: 'x' } },
        'payload_choice',
      ],
      [
        'selected message with default child',
        { choice: { $case: 'payloadChoice', payloadChoice: { resetValue: '' } } },
        'payload_choice.reset_value,text_choice',
      ],
      ['empty wrapper', { choice: {} }, 'payload_choice,text_choice'],
      ['undefined wrapper', { choice: undefined }, 'payload_choice,text_choice'],
    ])('%s', (_name, update, expected) => {
      const message = attachMessageDescriptor(update, oneofDescriptor);
      expect(resetMaskFromMessage(message)!.marshal()).toBe(expected);
    });
  });

  test('WKT Value reflects selected JS branch only', () => {
    const value = attachMessageDescriptor({ nullValue: null }, descriptor);
    expect(resetMaskFromMessage(value)!.marshal()).toBe('null_value.null_value');

    const nestedValue = attachMessageDescriptor({ structValue: { a: null } }, descriptor);
    expect(resetMaskFromMessage(nestedValue)!.marshal()).toBe('struct_value.fields.*.null_value');
  });

  test('WKT fields include child masks needed by patching present messages', () => {
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
      [
        'bool_value.bool_value',
        'list_value.values',
        'mask.paths',
        'masks.*.paths',
        'null_value.null_value',
        'number_value.number_value',
        'string_value.string_value',
        'struct_value.fields',
        'values.*.(bool_value,list_value.values,number_value,struct_value.fields.*.string_value)',
      ].join(','),
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
