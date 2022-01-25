function GetBaseDir () {
	let host = ''
	if (!!document.currentScript && document.currentScript.hasAttribute('data-host')) {
		host = document.currentScript.getAttribute('data-host')
	} else {
		host = location.protocol + '//' + location.host
		if (location.port != '') {
			host += ':'+location.port
		}
	}
	baseDir = new URL(host.endsWith('/') ? host : host + '/')

	if (!!document.currentScript && document.currentScript.hasAttribute('data-dir')) {
		baseDir.pathname = document.currentScript.getAttribute('data-dir')
	} else {
		let pieces = location.pathname.split(/(#|\?)/).shift().split(/\//g)
		if (pieces[pieces.length-1].includes('.')) {pieces.pop()}
		baseDir.pathname = pieces.join('/')
	}
	return baseDir.toString()
}



require = {
	baseUrl: GetBaseDir(),
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
		//'style!@css/org.tts'
	],
	skipDataMain: true
}