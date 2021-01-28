#!/usr/bin/env node
const { program } = require('commander')
const figlet = require('figlet')
const { log } = require('../src/utils')
const userModule = require('../src/module')
const pkg = require('../package.json')

log('blueBright', figlet.textSync('ROMANDAR'))

program.version(pkg.version, '-v, --version');
program.command('new [name]').description('Create project template by specify type.')
.action(name => {
    userModule.generateTemplates(name)
})

program.parse(process.argv)