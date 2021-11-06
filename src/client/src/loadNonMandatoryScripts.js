const afterSystemJSScriptsLoaded = function() {
	return new Promise(function(resolve, reject) {
		var intervalInst = setInterval(function() {
			if(window.afterScriptsLoaded == true) {
				clearInterval(intervalInst);
				resolve();
			}
		});
	});
}

afterSystemJSScriptsLoaded().then(() => {
      scriptsLoader
            .reset()
            .addScript('/thirdpartylib/core/core_part1.js')
            .addScript('/thirdpartylib/core/core_part2.js')
            .addScript('/thirdpartylib/carbon-components/carbon-icons.js')
            .addScript('/thirdpartylib/core/core-reactjsonschema.js')
            .addScript('/thirdpartylib/quill.js')      
            .load(); 
});