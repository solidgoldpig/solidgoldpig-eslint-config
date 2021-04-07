const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = 'const x = \'b\'\nconst foo = \'a\' + x'

test('prefer-template - when strings are concatenated', t => {
  const result = validate(codeInvalid)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'prefer-template', 'it should return the correct rule type')
  t.equals(result[0].message, 'Unexpected string concatenation.', 'it should return the correct error message')
})
