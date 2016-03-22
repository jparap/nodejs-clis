#!/usr/bin/env node  --use_strict

require('./helper')
let fs = require('fs').promise
let path = require('path')
let co = require('co')

let rm = co.wrap(function* (filepath) {
  	let stat = yield fs.stat(filepath)
  	if(stat.isFile()) {
  		yield fs.unlink(filepath)
        console.log('Deleted file ' + filepath + '\n' )
      }
    if(stat.isDirectory()){
    	let files = yield fs.readdir(filepath)
    	let promises = []
    	for (let file of files) {
    		promises.push(rm(path.join(filepath, file)))
		}
		yield Promise.all(promises)
		yield fs.rmdir(filepath)
		console.log('Deleted directory ' + filepath + '\n' )

}
})

function* main() {
    yield rm(process.argv[2])
}

module.exports = main
