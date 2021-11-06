const coreLibInit = function() {	  
	return new Promise((resolve, reject) => {
		try{
			let promises = [];
			promises.push(fetch('https://unpkg.com/srstecdn@1.0.143/core/core.js'));
			promises.push(System.import('https://unpkg.com/srstecdn@1.0.143/core/core_carbon.js'));
			promises.push(System.import('https://unpkg.com/srstecdn@1.0.143/core/core_jsonforms.js'));
			promises.push(System.import('/thirdpartylib/carbon-components/carbon-react.min.js'));
			promises.push(System.import('/thirdpartylib/bootstrap.min.js'));		
			promises.push(System.import('/thirdpartylib/quill.js'));		
			promises.push(System.import('/thirdpartylib/core/core_json.js'));		
			promises.push(System.import('/thirdpartylib/carbon-components/carbon-icons.js'));
			Promise.all(promises).then((results) => {
				window.isCoreLibReady = true;
				resolve()
			});
		}catch(err) {
			console.error(err);
		}
	});	
}

coreLibInit();
	