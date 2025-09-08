import { parseFieldMask } from '../runtime/fieldmask';

describe('Go parse compatibility', () => {
  const errorCases = [
    '*,',
    '*.',
    '*.', // equivalent malformed
    '*.(',
    ' \t\r\n*.( \t\r\n',
    'abcdefghijklmonpqrst.(abcdefghijklmonpqrst',
    'abcdefghijklmonpqrst)abcdefghijklmonpqrst',
    'abcdefghijklmonpqrst..abcdefghijklmonpqrst',
    'abcdefghijklmonpqrst abcdefghijklmonpqrst feafwafwawfadwadw',
    '#',
    '#1234567890abcdefghijklmnopqrst',
    '"1234567890abcdefghijklmnopqrst',
  ];
  for (const input of errorCases) {
    test(`parse error: ${JSON.stringify(input)}`, () => {
      expect(() => parseFieldMask(input)).toThrow();
    });
  }

  const okCases: Array<{ in: string; out: string }> = [
    { in: '', out: '' },
    { in: '()', out: '' },
    { in: ' \t\r\n( \t\r\n) \t\r\n', out: '' },
    { in: ' \t\r\n', out: '' },
    { in: '*', out: '*' },
    { in: ' \t\r\n* \t\r\n', out: '*' },
    { in: ' \t\r\na \t\r\n', out: 'a' },
    { in: ' \t\r\n( \t\r\na \t\r\n) \t\r\n', out: 'a' },
    { in: '*,*,*,*', out: '*' },
    { in: 'test', out: 'test' },
    { in: '"test"', out: 'test' },
    { in: '"test "', out: '"test "' },
    { in: 'a,a', out: 'a' },
    { in: 'a.b', out: 'a.b' },
    { in: 'a \t\r\n. \t\r\nb', out: 'a.b' },
    { in: 'a \t\r\n, \t\r\na', out: 'a' },
    { in: '*,test', out: '*,test' },
    { in: '* \t\r\n, \t\r\ntest', out: '*,test' },
    { in: 'test,*', out: '*,test' },
    { in: 'a.b,a.b', out: 'a.b' },
    { in: 'a.*,a.*', out: 'a.*' },
    { in: '*.b,*.b', out: '*.b' },
    { in: 'a.b,a.c', out: 'a.(b,c)' },
    { in: 'a.(b)', out: 'a.b' },
    { in: 'a.(b,())', out: 'a.b' },
    { in: 'a.((),b)', out: 'a.b' },
    { in: 'a.((()))', out: 'a' },
    { in: 'a.(b,c)', out: 'a.(b,c)' },
    { in: '*.(b,c)', out: '*.(b,c)' },
    { in: 'a.(b,c).(d,e)', out: 'a.(b.(d,e),c.(d,e))' },
    { in: 'a.(*,c).(d,e)', out: 'a.(*.(d,e),c.(d,e))' },
    { in: 'a.(((((((*,c))))))).(d,e)', out: 'a.(*.(d,e),c.(d,e))' },
    {
      in: '(((((((a))))))).(((((*)))),(((c)))).(((((((d,(((e))))))))))',
      out: 'a.(*.(d,e),c.(d,e))',
    },
    { in: 'a.(b,c.(d,e))', out: 'a.(b,c.(d,e))' },
    { in: 'a.(*,b,c)', out: 'a.(*,b,c)' },
    { in: 'a.(*,b,c.(d,e))', out: 'a.(*,b,c.(d,e))' },
    {
      in: '*.*.(a,b,c.*,d.(e,f),g.(*.(h,i),j,k)),1,A,B,l,m,n.*,o.(p,q,w,x),r.(*.(s,t),u.*,v),z.(*.y,u.*,v)',
      out: '*.*.(a,b,c.*,d.(e,f),g.(*.(h,i),j,k)),1,A,B,l,m,n.*,o.(p,q,w,x),r.(*.(s,t),u.*,v),z.(*.y,u.*,v)',
    },
    { in: 'a."\\",.() \\t\\r\\n".b', out: 'a."\\",.() \\t\\r\\n".b' },
  ];

  for (const { in: input, out } of okCases) {
    test(`parse/marshal ok: ${JSON.stringify(input)}`, () => {
      const m = parseFieldMask(input);
      const s = m.marshal();
      expect(s).toBe(out);
    });
  }
});
