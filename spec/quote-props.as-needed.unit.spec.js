const test = require('tape')
const validate = require('./helpers/validate')

let validCode = 'const foo = {bar: false}'

test('quote-props.as-needed - when a property is unquoted', t => {
  const result = validate(validCode)
  t.plan(1)
  t.true(result.valid, 'it should be valid')
})

const invalidCode = `const foo = {'bar': false}`

test('quote-props.as-needed - when a property is unnecessarily quoted', t => {
  const result = validate(invalidCode)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'quote-props', 'it should return the correct rule type')
  t.equals(result[0].message, 'Unnecessarily quoted property \'bar\' found.', 'it should return the correct error message')
})

const validCodeRequiresQuotes = `const foo = {'bar-baz': false}`

test('quote-props.as-needed - when a property is necessarily quoted', t => {
  const result = validate(validCodeRequiresQuotes)
  t.plan(1)
  t.true(result.valid, 'it should be valid')
})
