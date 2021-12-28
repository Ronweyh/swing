#!/usr/bin/env node
const { program } = require('commander')
const figlet = require('figlet')
const { log } = require('../libs/utils')
const userModule = require('../libs/module')
const test = require('../libs/test')
const pkg = require('../package.json')

log('blueBright', figlet.textSync('swing'))

program.version(pkg.version, '-v, --version');
program.command('new [name]').description('Create project template by specific type.')
.action(name => {
    userModule.generateTemplates(name)
})
program.command('tc').description('Test chalk color.')
.action(test.chalk)

program.parse(process.argv)