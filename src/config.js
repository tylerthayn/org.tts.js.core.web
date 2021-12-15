let baseDir = document.currentScript.hasAttribute('data-basedir') ? document.currentScript.getAttribute('data-basedir') : document.currentScript.getAttribute('src').split('/').reverse().slice(1).reverse().join('/')
require = {
	baseUrl: baseDir,
	paths: {
		'@css': './styles'
	},
	map: {
		'*': {
			'@js/core': 'org.tts.js.core'
		}
	},
	shim: {
		'bootstrap': {
			'deps': ['jquery', 'style!@css/bootstrap']
		},
		'jquery-ui': {
			'deps': ['jquery', 'style!@css/jquery-ui']
		},
		'style!@css/org.tts': {
			'deps': ['bootstrap']
		}
	},
	deps: [
		'style!@css/org.tts'
	],
	skipDataMain: true
}