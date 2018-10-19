/**
 * @author Said Bakr
 * @description The main application's file that contains the server and all business logic except configs
 */

 // Acquiring dependencies
 
 // The http object that creates and run the server. It is smple so we use http only without any https
 const http = require('http');
 // The url object to parse requested URL
 const url = require('url');



 // Creating the server
 const httpServer = http.createServer((req,res)=>{     
     // The app logic should defined in this object
     appLogic(req,res);
 });

 // Running the server by setting it to listen to the specified port
 httpServer.listen(3000,()=> console.log(`The server is listening to port 3000`));

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

 }

