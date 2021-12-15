
require(['lodash', 'jquery', 'bootstrap', 'jquery-ui', 'notifyjs', 'org.tts.js.core'], (_, $, bootstrap) => {
	console.log('lodash: ' + _.VERSION)
	console.log('jquery: ' + $().jquery)
	console.log('jquery-ui: ' + $.ui.version)
	console.log('bootstrap: ' + bootstrap.Button.VERSION)

})

