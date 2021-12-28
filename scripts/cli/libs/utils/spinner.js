const ora = require('ora')

function createSpinner(...args) {
    return ora(...args)
}

module.exports = createSpinner