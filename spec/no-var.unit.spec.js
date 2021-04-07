const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = `var foo = 1`

test('no-var - when a var is used', t => {
  const result = validate(codeInvalid)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'no-var', 'it should return the correct rule type')
  t.equals(result[0].message, 'Unexpected var, use let or const instead.', 'it should return the correct error message')
})
