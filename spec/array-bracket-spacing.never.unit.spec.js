const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = `const foo = [ 1 ]`

test('array-bracket-spacing.never - when brackets have extra spaces', t => {
  const result = validate(codeInvalid)
  t.plan(6)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 2, 'it should return 2 errors')
  t.equals(result[0].ruleId, 'array-bracket-spacing', 'it should return the correct rule type')
  t.equals(result[0].message, 'There should be no space after \'[\'.', 'it should return the correct error message')
  t.equals(result[1].ruleId, 'array-bracket-spacing', 'it should return the correct rule type')
  t.equals(result[1].message, 'There should be no space before \']\'.', 'it should return the correct error message')
})
