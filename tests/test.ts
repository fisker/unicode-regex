import unicode_regex = require('../src/index');

test('P-category', () => {
  const regex = unicode_regex(['Pc', 'Pd', 'Pe', 'Pf', 'Pi', 'Po', 'Ps']);
  expect(regex.test('"')).toBe(false);
  expect(regex.test('“')).toBe(true);
});
