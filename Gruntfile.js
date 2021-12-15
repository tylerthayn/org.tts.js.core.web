'use strict'

module.exports = function(grunt) {
	let pkg = require('./package.json')
	let make = {
		default: {
			options: {
				src: './src',
				dir: './dist',
				file: 'org.tts.js.core.web.js',
				min: 'org.tts.js.core.web.min.js'
			}
		}
	}

	grunt.initConfig({make: make})
	grunt.loadTasks('tasks')
}
