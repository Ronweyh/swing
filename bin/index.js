#!/usr/bin/env node
const { program } = require('commander')
const figlet = require('figlet')
const { log } = require('../src/utils')
const interface = require('../src/interface')

log('blueBright', figlet.textSync('ROMANDAR'))

program.version('1.0.0', '-v, --version')

program.parse(process.argv)