#!/usr/bin/env node
'use strict'

const lib = require('../lib/upsert-file')

const cli = require('coa')
    .Cmd()
    .name()
    .title()
    .helpful()

cli.arg()
    .name('data')
    .title('Data files')
    .req()
    .end()

cli.act((opts, args) => {
    return lib.cli(opts, args)
        .then(() => {
            console.log('Done')
            process.exit(0)
        })
        .catch(error => {
            console.error(error.stack)
            process.exit(-1)
        })
})

cli.run()