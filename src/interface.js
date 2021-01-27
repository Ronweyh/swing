const inquirer = require('inquirer')
const prompts = require('./prompts')
const { log } = require('./utils')
const templateUrls = require('./data/templates')

class UserInterface {
    init() {
        inquirer.prompt(prompts).then(answers => {
            this.generateTemplates(answers)
        })
    }

    generateTemplates(answers) {
        // 1. 下载模板
        
        // 2. 写入到当前文件夹

    }

    downloadTpl(type) {
        // 根据链接去获取模板位置
        const url = templateUrls[type]
        if (!url) {
            log('red', 'Type is not supported, please select another type.')
        }
    }
}

module.exports = new UserInterface()