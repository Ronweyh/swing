const chalk = require('chalk')

class Test {
    chalk() {
        const forBackgroundColor = [
            'black',
            'red',
            'green',
            'yellow',
            'blue',
            'magenta',
            'cyan',
            'white',
            'gray',
            'grey',
            'blackBright',
            'redBright',
            'greenBright',
            'yellowBright',
            'blueBright',
            'magentaBright',
            'cyanBright',
            'whiteBright',
        ]

        forBackgroundColor.forEach(color => {
            console.log(chalk[color](`Test chalk color ---> ${color}`))
        })
    }
}

module.exports = new Test()
