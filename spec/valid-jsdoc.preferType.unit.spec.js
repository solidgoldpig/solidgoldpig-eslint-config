const test = require('tape')
const validate = require('./helpers/validate')

const getCode = type => {
  return `/**
* Function description
*
* @param {${type}} bar Bar param
*
* @return {any}
*
**/
function foo (bar) {
  return bar
}`
}

const testType = type => {
  const Type = type.charAt(0).toUpperCase() + type.slice(1)
  const codeValid = getCode(type)

  test(`valid-jsdoc.preferType - when {${type}} is used`, t => {
    const result = validate(codeValid)
    t.plan(1)
    t.true(result.valid, 'it should be valid')
  })

  const codeInvalid = getCode(Type)

  test(`valid-jsdoc.preferType - when {${Type}} is used`, t => {
    const result = validate(codeInvalid)
    t.plan(4)
    t.false(result.valid, 'it should be invalid')
    t.equals(result.length, 1, 'it should return 1 error')
    t.equals(result[0].ruleId, 'valid-jsdoc', 'it should return the correct rule type')
    t.equals(result[0].message, `Use '${type}' instead of '${Type}'.`, 'it should return the correct error message')
  })
}

const types = [
  'array',
  'boolean',
  'function',
  'number',
  'object',
  'string',
  'symbol'
]
types.forEach(testType)
