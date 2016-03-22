#!/usr/bin/env node  --use_strict

require('./helper')
let fs = require('fs').promise
let path = require('path')

  function* mkdir() {
  	console.log(__dirname)
  	let cwd = __dirname
  	let dirname = process.argv[2]
  	let dirs = dirname.split('/')
  	console.log(dirs)
  	for (let dir in dirs ){
  	//	console.log(dir)
  	//	console.log(dirs[dir])
  		console.log('Creating dir ' + path.join(cwd, dirs[dir]))
		yield fs.mkdir(path.join(cwd, dirs[dir]))
  		cwd = path.join(cwd, dirs[dir]);
  	}
  }

module.exports = mkdir
