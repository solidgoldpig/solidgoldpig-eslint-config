const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = `const foo = (1)`

test('no-extra-parens - when unnecessary parentheses are used', t => {
  const result = validate(codeInvalid)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'no-extra-parens', 'it should return the correct rule type')
  t.equals(result[0].message, 'Unnecessary parentheses around expression.', 'it should return the correct error message')
})
