self.addEventListener('fetch', function(event) {
  event.respondWith(       
    fetchRequest(event.request)
  );
});

function fetchRequest(request) {      
  return fetch(request);
}

function processRequest2(request) {  
  var itemKey = request.url;
  if(itemKey.indexOf("/jspm_packages/") > -1 || 
      (itemKey.indexOf("/thirdpartylib/") && itemKey.endsWith(".js")) || 
      (itemKey.indexOf("/client/script/") && itemKey.endsWith(".js")) || 
      itemKey.endsWith("/Action.js")) {
    caches.open("srste").then(function(cache) {      
      return cache.match(request).then(function (response) {
        return response || fetch(request).then(function(response) {
          cache.put(request, response.clone());
          return response;
        });
      });      
    }) 
  }else {
    return fetch(request);
  }
}