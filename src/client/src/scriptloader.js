var scriptsLoader = (function() {

	const moduleApi = Object.create(null);
	moduleApi.load = load;
	moduleApi.reset = reset;
	moduleApi.addScript = addScript;
	moduleApi.afterLoad = afterLoad;
	moduleApi.onComplete = onComplete;
		
	const noop = () => {};
	let _scripts = [],
		_afterLoad = noop,
		_onComplete = noop;
			
	function removeDuplicatedScripts() {
	  var uniques = [];
	  var notFound = -1;
	  _scripts.forEach(function (item) {
		if (uniques.indexOf(item) === notFound) uniques.push(item);
	  });
	  return uniques;
	}
  
	function createScriptElement() {
	  // gets the first script in the list
	  let scriptSrc = _scripts.shift();
	  // all scripts were loaded
	  if (!scriptSrc) return _onComplete();
	  let js = document.createElement('script');
	  js.type = 'text/javascript';
	  js.src = scriptSrc;
	  js.defer = true;
	  js.onload = function onLoadCallback() {
		_afterLoad(scriptSrc);
		// loads the next script
		createScriptElement();
	  };
	  js.onerror = console.error;
	  let s = document.getElementsByTagName('script')[0];
	  s.parentNode.insertBefore(js, s);
	}
  
	// Receive an URL or a list of URLs for each script to be loaded.
	function addScript(scriptSrc) {
	  _scripts = _scripts.concat(scriptSrc);
	  return moduleApi;
	}
  
	// Run the task to load scripts in the specified order.
	function load() {
	  _scripts = removeDuplicatedScripts();
	  createScriptElement();
	}
  
	// Clear the array of scripts, or cancels the load of scripts.
	function reset() {
	  _scripts.length = 0;
	  _onComplete = _afterLoad = noop;
	  return moduleApi;
	}
  
	// Callback executed after each script has been loaded.
	function afterLoad(callback) {
	  if (typeof callback === 'function') {
		_afterLoad = callback;
	  }
	  return moduleApi;
	}
	
	// Callback executed after all scripts have been loaded.
	function onComplete(callback) {
	  if (typeof callback === 'function') {
		_onComplete = callback;
	  }
	  return moduleApi;
	}
  
	return moduleApi;
  }());