const path = require('path')

const Linter = require('eslint').Linter
const linter = new Linter()
const settings = require(path.join(__dirname, '..', '..', 'index'))

const validate = code => {
  const result = linter.verify(code, settings)
  result.valid = result.length === 0
  return result
}

module.exports = validate
