const chalk = require('chalk')

// args: 0 --> color 
function log(color, ...args) {
    if (!color) {
        return console.log(...args)
    }
    console.log(chalk[color](...args))
}

module.exports = {
    log
}