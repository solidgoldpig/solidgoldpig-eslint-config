const test = require('tape')
const validate = require('./helpers/validate')

const codeInvalid = `/**
* Function description
*
* @param {any} bar
*
* @return {any}
*
**/
function foo (bar) {
 return bar
}`

test('valid-jsdoc.requireParamDescription - when @param description is missing', t => {
  const result = validate(codeInvalid)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'valid-jsdoc', 'it should return the correct rule type')
  t.equals(result[0].message, 'Missing JSDoc parameter description for \'bar\'.', 'it should return the correct error message')
})
