window.InsertScript = function (file,cb=()=>{}){let script=document.createElement('script');script.type='text/javascript';script.src=file;script.addEventListener('load',function(e){cb(script)});document.getElementsByTagName('head')[0].appendChild(script)}
window.InsertStyle = function (file,cb=()=>{}){let style=document.createElement('link');style.rel='stylesheet';style.href=file;style.addEventListener('load',function(e){cb(style)});document.getElementsByTagName('head')[0].appendChild(style)}

let currentScript = document.currentScript
let basePath = BasePath()
require(['jquery', 'bootstrap', 'jquery-ui', 'notifyjs', '@js/core'], ($, bootstrap) => {
	if (currentScript.hasAttribute('data-main')) {
		InsertScript(Path.join(basePath, currentScript.getAttribute('data-main').endsWith('.js') ? currentScript.getAttribute('data-main') : currentScript.getAttribute('data-main')+'.js'))
	}
	if (currentScript.hasAttribute('data-start')) {
		if (Reflect.has(global, currentScript.getAttribute('data-start'))) {
			global[currentScript.getAttribute('data-start')]($, bootstrap)
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