function InsertScript(file,cb=()=>{}){let script=document.createElement('script');script.type='text/javascript';script.src=file;script.addEventListener('load',function(e){cb(script)});document.getElementsByTagName('head')[0].appendChild(script)}
function InsertStyle(file,cb=()=>{}){let style=document.createElement('link');style.rel='stylesheet';style.href=file;style.addEventListener('load',function(e){cb(style)});document.getElementsByTagName('head')[0].appendChild(style)}

let main = document.currentScript.hasAttribute('data-main') ? document.currentScript.getAttribute('data-main') : 'index'

//require(['jquery', 'bootstrap', 'jquery-ui', 'notifyjs', 'org.tts.js.core'], ($, bootstrap) => {
//	global.$ = $
//	global.bootsrap = bootstrap

	InsertScript(baseDir+(baseDir == '' ? '' : '/')+main+'.js')

//})
