const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = 'const x = \'a\'\nconst foo = `${ x ' + ' }`'

test('no-var - when a var is used', t => {
  const result = validate(codeInvalid)
  t.plan(6)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 2, 'it should return 2 errors')
  t.equals(result[0].ruleId, 'template-curly-spacing', 'it should return the correct rule type')
  t.equals(result[0].message, 'Unexpected space(s) after \'${\'.', 'it should return the correct error message')
  t.equals(result[1].ruleId, 'template-curly-spacing', 'it should return the correct rule type')
  t.equals(result[1].message, 'Unexpected space(s) before \'}\'.', 'it should return the correct error message')
})
