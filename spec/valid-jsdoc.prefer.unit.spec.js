const test = require('tape')
const validate = require('./helpers/validate')

let codeValidParam = `/**
* Function description
*
* @param {any} bar Bar param
*
* @return {any}
*
**/
function foo (bar) {
 return bar
}`

test('valid-jsdoc.prefer - when @return is used', t => {
  const result = validate(codeValidParam)
  t.plan(1)
  t.true(result.valid, 'it should be valid')
})

const testWrongParam = (t, code) => {
  const result = validate(code)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'valid-jsdoc', 'it should return the correct rule type')
  t.equals(result[0].message, 'Use @param instead.', 'it should return the correct error message')
}

const codeInvalidArg = `/**
* Function description
*
* @arg {any} bar Bar param
*
* @return {any}
*
**/
function foo (bar) {
 return bar
}`

test('valid-jsdoc.prefer - when @arg is used', t => {
  testWrongParam(t, codeInvalidArg)
})

const codeInvalidArgument = `/**
* Function description
*
* @argument {any} bar Bar param
*
* @return {any}
*
**/
function foo (bar) {
 return bar
}`

test('valid-jsdoc.prefer - when @argument is used', t => {
  testWrongParam(t, codeInvalidArgument)
})

const codeInvalidRequired = `/**
* Function description
*
* @return {any}
*
**/
function foo (bar) {
 return bar
}`

test('valid-jsdoc.prefer - when no @param is used', t => {
  const result = validate(codeInvalidRequired)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'valid-jsdoc', 'it should return the correct rule type')
  t.equals(result[0].message, 'Missing JSDoc for parameter \'bar\'.', 'it should return the correct error message')
})

let codeValidReturn = `/**
* Function description
*
* @param {any} bar Bar param
*
* @return {any}
*
**/
function foo (bar) {
 return bar
}`

test('valid-jsdoc.prefer - when @return is used', t => {
  const result = validate(codeValidReturn)
  t.plan(1)
  t.true(result.valid, 'it should be valid')
})

const codeInvalidReturns = `/**
* Function description
*
* @param {any} bar Bar param
*
* @returns {any}
*
**/
function foo (bar) {
 return bar
}`

test('valid-jsdoc.prefer - when @returns is used', t => {
  const result = validate(codeInvalidReturns)
  t.plan(4)
  t.false(result.valid, 'it should be invalid')
  t.equals(result.length, 1, 'it should return 1 error')
  t.equals(result[0].ruleId, 'valid-jsdoc', 'it should return the correct rule type')
  t.equals(result[0].message, 'Use @return instead.', 'it should return the correct error message')
})
