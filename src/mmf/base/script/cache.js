var cache = {};
if(process.env.USE_REDIS + "" == "true") {
    const redis = require("redis");        
    const serialize = require('serialize-javascript')

    let redisHost = process.env.REDIS?process.env.REDIS.split(":")[0]: "192.168.0.101";
    let redisPort = process.env.REDIS?process.env.REDIS.split(":")[1]: "6379";
    const client = redis.createClient({host: redisHost || "192.168.0.101", port: redisPort || "6379"});
    client.on("error", function(err) {
        console.error(err);
    });

    cache.put = (keyName, val, ttls) => {
        if(val == null) {
            if(ttls) {
                client.set(keyName, null, "EX", ttls, (err, result)=> {});
            }else {
                client.set(keyName, null);
            }
        }else {
            let newVal = JSON.parse(JSON.stringify(val));

            var getAllFunctionNames = function (toCheck) {
                if(!toCheck) return [];
                
                var props = [];
                var obj = toCheck;
                //If no prototype of the current object then it is the default Object... 
                while (!!Object.getPrototypeOf(Object.getPrototypeOf(obj))) {
                    obj = Object.getPrototypeOf(obj)
                    props = props.concat(Object.getOwnPropertyNames(obj));
                } 
                
                return props;
                // return props.sort().filter(function(e, i, arr) { 
                //    if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;
                // });
            }

            if(typeof val != "string") {          
                if(Array.isArray(val)) {
                    newVal = [];
                    val.map((item, indx)=> {
                        let newValItem = JSON.parse(JSON.stringify(val[indx]));
                        let ownProps = Object.getOwnPropertyNames(val[indx]); 
                        ownProps && ownProps.map((ownProp) => {
                            newValItem[ownProp] = item[ownProp];
                        });
                        let inheritedProps = getAllFunctionNames(val[indx]);
                        inheritedProps && inheritedProps.map((inheritedProp) => {
                            newValItem[inheritedProp] = item[inheritedProp];
                        });
                        if(newValItem.uid) {
                            newValItem.id = newValItem.uid;
                        }
                        newVal.push(newValItem);
                    });
                }else if(typeof val == "object") {                   
                    let ownProps = Object.getOwnPropertyNames(val); 
                    ownProps && ownProps.map((ownProp) => {
                        newVal[ownProp] = val[ownProp];
                    });         
                    let functionNames = getAllFunctionNames(val);
                    functionNames && functionNames.map((functionName) => {
                        newVal[functionName] = val[functionName];
                    });
                    if(newVal.uid) {
                        newVal.id = newVal.uid;
                    }
                }
                newVal = "OBJECT::" + serialize(newVal);
            }

            if(ttls) {
                client.set(keyName, newVal, "EX", ttls, (err, result)=> {});
            }else {
                client.set(keyName, newVal);
            }
        }
    }
    cache.get = (keyName) => {
        return new Promise((resolve, reject)=>{
            client.get(keyName, (err, result)=> {
                if(err) {
                    resolve("");
                }else {
                    if(result && result.startsWith("OBJECT::")) {
                        let newVal = result.split("OBJECT::")[1];
                        newVal = eval("(" + newVal + ")");
                        resolve(newVal);
                    }else {
                        resolve(result);
                    }                    
                }                
            });
        });        
    }
    cache.keys = ()=> {
        return new Promise((resolve, reject)=>{
            client.keys("*", (err, keys)=>{
                if(err) {
                    resolve([]);
                }else if(keys && keys.length > 0) {
                    resolve(keys);                    
                }else {
                    resolve([]);
                }             
            })
        });
    }

    cache.clear = () => {
        return new Promise((resolve, reject)=>{
            client.keys("*", (err, keys)=>{
                if(err) {
                    resolve();
                }else if(keys && keys.length > 0) {
                    client.del(keys, (err,o)=>{ 
                        resolve();
                    })
                }else {
                    resolve();
                }             
            })
        });        
    }

    cache.del = (key) => {
        return new Promise((resolve, reject)=>{            
            client.del([key], (err,o)=>{ 
                resolve();
            })                                         
        });        
    }
}else {
    cache = require("memory-cache");
}

module.exports = cache;