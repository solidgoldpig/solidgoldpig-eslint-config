const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = 'const foo = `bar`'

test('quotes.single - when a template literal is used unnecessarily', t => {
  const result = validate(codeInvalid)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'quotes', 'it should return the correct rule type')
  t.equals(result[0].message, 'Strings must use singlequote.', 'it should return the correct error message')
})

let codeValid = 'const x = \'a\'\nconst foo = `${x' + '}`'
test('quotes.single - when a template literal is needed for substitution', t => {
  const result = validate(codeValid)
  t.plan(1)
  t.true(result.valid, 'it should be valid')
})
