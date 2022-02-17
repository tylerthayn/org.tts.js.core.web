
window.InsertScript = function (file,cb=()=>{}){let script=document.createElement('script');script.type='text/javascript';script.src=file;script.addEventListener('load',function(e){cb(script)});document.getElementsByTagName('head')[0].appendChild(script)}
window.InsertStyle = function (file,cb=()=>{}){let style=document.createElement('link');style.rel='stylesheet';style.href=file;style.addEventListener('load',function(e){cb(style)});document.getElementsByTagName('head')[0].appendChild(style)}
window.AddStyle = function(style){let css=document.createElement('style');css.type='text/css';css.styleSheet?css.styleSheet.cssText=style:css.appendChild(document.createTextNode(style));document.getElementsByTagName('head')[0].appendChild(css)}
define('style',{load:function(name,req,onload,config){let file=name;Object.keys(config.paths).forEach(path=>{file=file.replace(path,config.paths[path])});file=file.endsWith('.css')?file:file+'.css';InsertStyle(file,onload)}})
