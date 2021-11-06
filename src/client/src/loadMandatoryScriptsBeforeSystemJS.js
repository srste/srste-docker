
if(!window.testMode) {
      scriptsLoader
            .reset()      
            .addScript('/thirdpartylib/jquery.min.js')   
            .addScript('/thirdpartylib/jquery-ui.min.js')   
            .addScript('/thirdpartylib/underscore.js')  
            .addScript('/thirdpartylib/system.js')
            .addScript('/jspm.config.js')
            .onComplete(() => window.beforeScriptsLoaded = true)                
            .load();
}else {
      scriptsLoader
            .reset()      
            .addScript('/thirdpartylib/jquery.min.js')   
            .addScript('/thirdpartylib/jquery-ui.min.js')   
            .addScript('/thirdpartylib/underscore.js')              
            .onComplete(() => window.beforeScriptsLoaded = true)                
            .load();
}
      
