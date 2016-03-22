#!/usr/bin/env node --use_strict

require('./helper')
let fs = require('fs').promise

function* echo() {
    // Use 'yield' in here
    // Your implementation here
   // console.log(yield fs.readFile(__filename, console.log))
   let file = process.argv[2]
   process.stdout.write(file +'\n')
}

module.exports = echo
