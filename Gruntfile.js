'use strict'

module.exports = function(grunt) {
	let pkg = require('./package.json')
	let make = {
		default: {
			options: {
				src: './src',
				dir: './dist',
				file: 'js.core.web.js',
				min: 'js.core.web.min.js'
			}
		}
	}

	grunt.initConfig({make: make})
	grunt.loadTasks('tasks')
}
