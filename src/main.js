function InsertScript(file,cb=()=>{}){let script=document.createElement('script');script.type='text/javascript';script.src=file;script.addEventListener('load',function(e){cb(script)});document.getElementsByTagName('head')[0].appendChild(script)}
function InsertStyle(file,cb=()=>{}){let style=document.createElement('link');style.rel='stylesheet';style.href=file;style.addEventListener('load',function(e){cb(style)});document.getElementsByTagName('head')[0].appendChild(style)}

let currentScript = document.currentScript
require(['jquery', 'bootstrap', 'jquery-ui', 'notifyjs', 'org.tts.js.core'], ($, bootstrap) => {

	if (currentScript.hasAttribute('data-main')) {
		InsertScript(baseDir+(baseDir == '' ? '' : '/')+currentScript.getAttribute('data-main')+'.js')
	}
	if (currentScript.hasAttribute('data-start')) {
		let fn = currentScript.getAttribute('data-start')
		if (Reflect.has(global, fn)) {
			global[fn]($, bootstrap)
		}
	}

	document.dispatchEvent(new CustomEvent('web-ready', {
		bubbles: true,
		detail: {
			$: $,
			bootstrap: bootstrap
		}
	}))
})


//require(['jquery', 'bootstrap', 'jquery-ui', 'notifyjs', 'org.tts.js.core'], ($, bootstrap) => {
//	global.$ = $
//	global.bootsrap = bootstrap


//})
