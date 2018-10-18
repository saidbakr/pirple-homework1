/**
 * @author Said Bakr
 * @description The main application's file that contains the server and all business logic except configs
 */

 // Acquiring dependencies
 
 // The http object that creates and run the server. It is smple so we use http only without any https
 const http = require('http');



 // Creating the server
 const httpServer = http.createServer((req,res)=>{
     // The app logic should defined in this object
     appLogic(req,res);
 });

 // Running the server by setting it to listen to the specified port
 httpServer.listen(3000,()=> console.log(`The server is listening to port 3000`));

 // The app logic

 let appLogic = (req, res) => {

 }

