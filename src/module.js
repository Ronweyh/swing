const inquirer = require('inquirer')
const { newProjectPrompts } = require('./prompts')
const { log } = require('./utils')
const templateUrls = require('./data/templates')
const download = require('download-git-repo')
const createSpinner = require('./utils/spinner')
const shell = require('shelljs')

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
            this.installPackages(name)
        })
    }

    installPackages(name) {
        const spinner = createSpinner(`Auto install packages in ${name} \n`)
        spinner.start()
        // 下载完后自动安装依赖
        shell.cd(name)
        shell.exec('yarn install')
        spinner.succeed()
    }
}

module.exports = new Module()
