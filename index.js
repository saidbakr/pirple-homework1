/**
 * @author Said Bakr
 * @description The main application's file that contains the server and all business logic except configs
 */

 // Acquiring dependencies
 
 // The http object that creates and run the server. It is smple so we use http only without any https
 const http = require('http');
 // The url object to parse requested URL
 const url = require('url');
 // The configuration entries
 let config = require('./config');
 // Creating the server
 const httpServer = http.createServer((req,res)=>{     
     // The app logic should defined in this object
     appLogic(req,res);
 });

 // Running the server by setting it to listen to the specified port
 httpServer.listen(config.port,()=> console.log(`The server is listening to port ${config.port}`));

 // The app logic

 let appLogic = (req, res) => {
     // Getting the URL and parsing it
     let parsedUrl = url.parse(req.url,true);
     // Untimmed requested path
     let crudPath = parsedUrl.pathname;
     // Final trimmed path. Trime means remove any prefixed or suffixed slash / only
     // Example: /the/path/ => the/path
     let path = crudPath.replace(/^\/+|\/+$/g,'');
     // Determine the HTTP method used in the request and set it in lower case.
     let method = req.method.toLowerCase();
     // All possible application's routes from config
     const routes = config.routes;
     // Allowed method
     const methods = config.allowedMethods; 
     req.on('data', function (chunk) {  });
     // At the end of the request, prepare to response
     req.on('end',() => {        
         if (typeof(routes[path]) == 'undefined'){
             // The requeted uri is not defined in config.routes => notFound Handler
             activeHandler = routes['notFound'];            
         }
         else if(typeof(methods[method]) == 'undefined'){
               // The HTTP method is not defined config.allowedMethods => notAllowed handler
               activeHandler = routes['notAllowed'];
         }
         else{
             // Every thing is defined so use the path handler of the URI i.e hello
            activeHandler = routes[path];
         }
         // Empty data object
         const data ={};         
         activeHandler(data,(statusCode,payloads) => {             
            statusCode = typeof(statusCode) == 'number'? statusCode:200;
            // Use payload from the handler or default empty 
            payloads = typeof(payloads) == 'object'? payloads:{};
            // Attach extra property to the payloads object "method"
            payloads.method = method.toUpperCase();
            // convert the payload into string
            const payloadString = JSON.stringify(payloads);
            // Return the response.
            res.setHeader('Content-Type','application/json')
            res.writeHead(statusCode);
            res.end(payloadString);
            console.log('the request responded with: ', statusCode, payloadString);
         });
     });     
 }

