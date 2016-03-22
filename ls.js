#!/usr/bin/env node  --use_strict

require('./helper')
let fs = require('fs').promise

function* ls() {
  console.log('Executing ls function...')
  let dir = process.argv[2]
  let files = yield listFiles(dir)
}

function* listFiles(dir) {
  let files = yield fs.readdir(dir)
  for (let file of files) {
    let stat = yield fs.stat(dir + '/'+ file)
    if(stat.isDirectory()) {
      yield listFiles(dir + '/'+ file)
    } 
    else {
      console.log(file)
       }
    }
 }

module.exports = ls
