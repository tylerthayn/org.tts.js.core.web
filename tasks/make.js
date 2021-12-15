'use strict'
let Fs = require('fs'), Path = require('path'), Strip = require('strip-comments'), UglifyJS = require("uglify-es")
let minifyOptions={compress:true,output:{quote_style:1}}
let sep = '\r\n\r\n'

module.exports = function(grunt) {
	let pkg = require(Path.resolve('./package.json'))

	grunt.registerMultiTask('make', 'Make package distributable', function() {
		let options = this.options({})

		let code = ''
		code = Config()
		code += sep + RequireJs()
		code += sep + Plugins()
		code += sep + Lodash()
		code += sep + jQuery()
		code += sep + jQueryUi()
		code += sep + PopperJs()
		code += sep + Bootstrap()
		code += sep + NotifyJs()
		code += sep + Core()
		code += sep + Main()


		code = code


		grunt.log.write('Generating dist folders...')
		try {Fs.mkdirSync(Path.resolve(options.dir, pkg.version), {recursive: true})} catch (e) {}
		grunt.log.ok()

		grunt.log.write('Creating release file...')
		Fs.writeFileSync(Path.resolve(options.dir, pkg.version, options.file), code, 'utf-8')
		Fs.writeFileSync(Path.resolve(options.dir, options.file), code, 'utf-8')
		grunt.log.ok()

		//grunt.log.write('Creating minified file...')
		//Fs.writeFileSync(Path.resolve(options.dir, pkg.version, options.min), UglifyJS.minify(code, minifyOptions).code, 'utf-8')
		//Fs.writeFileSync(Path.resolve(options.dir, options.min), UglifyJS.minify(code, minifyOptions).code, 'utf-8')
		//grunt.log.ok()

		grunt.log.ok('ok')

	})


	function Bootstrap () {
		grunt.log.write('Preparing bootstrap...')
		let file = require.resolve('bootstrap')
		let src = Fs.readFileSync(file, 'utf-8')
		src = src.replace(/define\(/, 'define(\'bootstrap\', ')
		grunt.log.ok()
		return src
	}

	function Config () {
		grunt.log.write('Preparing config...')
		let src = Fs.readFileSync('./src/config.js', 'utf-8')
		grunt.log.ok()
		return src
	}

	function Core () {
		grunt.log.write('Preparing org-tts-js-core...')
		let file = require.resolve('org-tts-js-core')
		let src = Fs.readFileSync(file, 'utf-8')
		grunt.log.ok()
		return src
	}

	function jQuery () {
		grunt.log.write('Preparing jquery...')
		let file = require.resolve('jquery')
		let src = Fs.readFileSync(file, 'utf-8')
		grunt.log.ok()
		return src
	}

	function jQueryUi () {
		grunt.log.write('Preparing jquery-ui...')
		let file = require.resolve('jqueryui')
		let src = Fs.readFileSync(file, 'utf-8')
		src = src.replace(/define\(/, 'define(\'jquery-ui\', ')
		grunt.log.ok()
		return src
	}

	function Lodash () {
		grunt.log.write('Preparing lodash...')
		let file = require.resolve('lodash')
		let src = Fs.readFileSync(file, 'utf-8')
		src = src.replace(/define\(/, 'define(\'lodash\', ')
		grunt.log.ok()
		return src
	}

	function Main () {
		grunt.log.write('Preparing main...')
		let src = Fs.readFileSync('./src/main.js', 'utf-8')
		grunt.log.ok()
		return src
	}

	function NotifyJs () {
		grunt.log.write('Preparing notify.js...')
		let file = require.resolve('notifyjs-browser')
		let src = Fs.readFileSync(file, 'utf-8')
		src = src.replace(/define\(/, 'define(\'notifyjs\', ')
		grunt.log.ok()
		return src
	}

	function Plugins () {
		grunt.log.write('Preparing plugins...')
		let src = Fs.readFileSync('./src/plugins.js', 'utf-8')
		grunt.log.ok()
		return src
	}

	function PopperJs () {
		grunt.log.write('Preparing @popperjs/core...')
		let file = require.resolve('@popperjs/core').replace('cjs', 'umd')
		let src = Fs.readFileSync(file, 'utf-8')
		src = `(function () {\r\n` + src.replace(/define\(/, 'define(\'@popperjs/core\', ') + `\r\n}());`
		grunt.log.ok()
		return src
	}

	function RequireJs () {
		grunt.log.write('Preparing requirejs...')
		let file = require.resolve('requirejs').replace(/bin(\/|\\)r\.js/, 'require.js')
		let src = Fs.readFileSync(file, 'utf-8')
		grunt.log.ok()
		return src
	}

	function Style () {


	}

}