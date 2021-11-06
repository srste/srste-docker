const beforeSystemJSScriptsLoaded = function() {
	return new Promise(function(resolve, reject) {
		var intervalInst = setInterval(function() {
			if(window.beforeScriptsLoaded == true) {
				clearInterval(intervalInst);
				resolve();
			}
		});
	});
}

beforeSystemJSScriptsLoaded().then(() => {
	if(!window.testMode) {
		scriptsLoader
			.reset()			
			.addScript('/thirdpartylib/bootstrap.min.js')
			.addScript('/thirdpartylib/carbon-components/carbon-react.min.js')
			.addScript('/thirdpartylib/core/core_json.js')
			.addScript('/thirdpartylib/cached/form-bundle.js')
			.addScript('/thirdpartylib/core/core_jsonforms.js')
			.onComplete(() => window.afterScriptsLoaded = true)    
			.load();
	}else {
		scriptsLoader
			.reset()
			.addScript('/jspm.config.js')
			.addScript('/thirdpartylib/bootstrap.min.js')
			.onComplete(() => window.afterScriptsLoaded = true)    
			.load();
	}
})