#!/usr/bin/env node --use_strict

require('./helper')
let fs = require('fs').promise

function* cat() {
    // Use 'yield' in here
    // Your implementation here
    let file = process.argv[2]
    console.log(yield fs.readFile(file, 'utf8'))
}

module.exports = cat