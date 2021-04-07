const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = `const foo = [1
]`

test('array-bracket-newline.consistent - when brackets do not balance', t => {
  const result = validate(codeInvalid)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'array-bracket-newline', 'it should return the correct rule type')
  t.equals(result[0].message, 'There should be no linebreak before \']\'.', 'it should return the correct error message')
})
