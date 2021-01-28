const inquirer = require('inquirer')
const { newProjectPrompts } = require('./prompts')
const { log } = require('./utils')
const templateUrls = require('./data/templates')
const download = require('download-git-repo')
const createSpinner = require('./utils/spinner')

class Module {
    init() {
        // inquirer.prompt(prompts).then(answers => {
        //     this.generateTemplates(answers)
        // })
    }

    generateTemplates(name) {
        inquirer.prompt(newProjectPrompts).then(ans => {
            const { type } = ans
            if (!type) {
                return log('red', 'Please select a template type!')
            }
            // 1. 下载模板
            this.downloadTpl(type, name)
            // 2. 写入到当前文件夹
        })
    }

    downloadTpl(type, name) {
        // 根据链接去获取模板位置
        const url = templateUrls[type]
        if (!url) {
            log('red', 'Type is not supported, please select another type.')
            this.generateTemplates(name)
            return
        }
        const spinner = createSpinner('Downloading template...')
        spinner.start()
        download(url, name, (err) => {
            if (err) {
                spinner.fail()
                console.log(err)
                return;
            }
            spinner.succeed()
        })
    }
}

module.exports = new Module()
