#!/usr/bin/env node  --use_strict

require('./helper')
let fs = require('fs').promise
let  path = require('path')

function* touch() {
    var file = process.argv[2]
    var dt = new Date();
    var fd = yield fs.open(path.join(process.cwd(), file), 'a')
    yield fs.utimes(file,  dt, dt)
}

module.exports = touch
