const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = `/**
* Function description
*
* @param {any} bar
*
* @return bar
*
**/
function foo (bar) {
 return
}`

test('valid-jsdoc.requireReturnType - when @return type is missing', t => {
  const result = validate(codeInvalid)
  t.plan(6)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 2, 'it should return 2 errors')
  t.equals(result[0].ruleId, 'valid-jsdoc', 'it should return the correct rule type')
  t.equals(result[0].message, 'Missing JSDoc return type.', 'it should return the correct error message')
  t.equals(result[1].ruleId, 'valid-jsdoc', 'it should return the correct rule type')
  t.equals(result[1].message, 'Missing JSDoc parameter description for \'bar\'.', 'it should return the correct error message')
})
