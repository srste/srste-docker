//LasttModified:1526117124884
const isDynalibReadyFn = function() {
	return new Promise(function(resolve, reject) {
		var intervalInst = setInterval(function() {
			if(window.isDynalibReady == true && window.afterScriptsLoaded == true) {
				clearInterval(intervalInst);
				resolve();
			}
		});
	});
}

const srsteInit = async function() {
	try{  
    	let srsteCDN = "/thirdpartylib";
		System.config({ production: true });
		
		let productionMode = location.search.indexOf("debug=true") == -1;			    	
		window.isDebug = !productionMode;
		window.useCache = !(location.search.indexOf("nocache=true") > -1);
		let lastSync = Date.now();
		try {
			let lastSyncReq = await fetch("/lastsync?t=" + Date.now());
			lastSyncReq = await lastSyncReq.json();
			lastSync = lastSyncReq.result;
		}catch(err) {}

		let cachedData = {};
		try {
			let cachedDataReq = await fetch("/get_clientcache/" + lastSync);
			cachedDataReq = await cachedDataReq.json();
			cachedData = cachedDataReq.result;
			window.$qry = window.$qry || {};
			window.$qry.cache = { ...window.$qry.cache, ...cachedData };
		}catch(err) {}

		if(!productionMode) {	
			//debug mode 
			await System.import('/load/debugbundle/core.js' + '?key=' + lastSync); //core modules in debug mode
			await System.import('/load/debugbundle/apps.js' + '?key=' + lastSync); //apps modules
			System.import('client/script/mmf/RootLoader.js')
				.then(function(rootModule) {        
					$(".wrap-outter").css("display", "none");
					rootModule.RootLoader();    
				}).catch(function(err) {      
					console.error(err.message);
				});	        
		}else {
			if(!window.testMode) {			
				await System.import('/load/bundle/core.js' + '?key=' + lastSync);
				await System.import('/load/bundle/apps.js' + '?key=' + lastSync);
				System.import('client/script/mmf/RootLoader.js')
				.then(function(rootModule) {        	
					$(".wrap-outter").css("display", "none");
					rootModule.RootLoader();    
					// lazyLoadCoreLibs();
				}).catch(function(err) {      
					console.error(err.message);
				});

			}else {
				System.import('client/script/mmf/RootLoader.js')
				.then(function(rootModule) {        
					$(".wrap-outter").css("display", "none");
					rootModule.RootLoader();    
					// lazyLoadCoreLibs();
				}).catch(function(err) {      
					console.error(err.message);
				}); 				
			}
		}    
	}catch(ex){
	    console.error(ex);
	}
}

function lazyLoadCoreLibs() {
	System.register("/thirdpartylib/core/core_part1.js");
	System.register("/thirdpartylib/core/core_part2.js");
	System.register("/thirdpartylib/carbon-components/carbon-react.min.js");
	System.register("/thirdpartylib/core/core_jsonforms.js");
	System.register("/thirdpartylib/core/core_json.js");
	System.register("/thirdpartylib/carbon-components/carbon-icons.js");
}

// initCoreLib();
isDynalibReadyFn().then(function() {
	srsteInit();
});
