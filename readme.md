# Homework Assignment #1
The first home work of [Pirple's](https://pirple.thinkific.com) Node.js course.
### Requirements
>
> It should be a RESTful JSON API that listens on a port of your choice. 
> 
> When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 


### Contents of the assignment

 * Node HTTP server
 * RESTful api application
 * The api has single end point hello
 * The end point returns a message in format of JSON will looks like the following:

 ```
 {
     'msg': 'Welcome to our api',
     'method': 'POST'
 } 
 ```
 ### Usage and testing features
 Clone the repo. locally, then from the application root folder where `index.js` is found, enter the following command from the terminal or the command line to start up the server of the application:
 ```
 node index
 ```
 The server should be started at the port 3000 with the following log message:
 > The server is listening to port 3000
 Using any REST client such as [Insomania](https://insomnia.rest), [Postman](https://www.getpostman.com/apps), etc create a HTTP request to `http://localhost:3000/hello` using the `POST` method to get 200 HTTP response code with JSON object body like the descriped above.

 The application has only one route *end point*. If you try to use any other route rather than `hello` you will have got HTTP status code 404 and an error JSON object like the following:
 ```
 {
	"error": "Not found endpoint",
	"method": "THE HTTP METHOD USED"
}
```

Also the application supports only one HTTP method `POST` using any other HTTP method will raise 405 status, if the route is defined of course i.e hello, with the following JSON object:
```
{
	"error": "Method not allowed",
	"method": "THE HTTP METHOD USED"
}
```
#### The configuration 
Using the configuration, you are able to extend the application's features such as the following:
 - Change the server's port to any port you want. `config.port`
 - Change the text of the welcome message when accessing defined route with supported HTTP method. `config.fixedMsg`
 - Changing the supported HTTP methods. `config.allowedMethods`
 - Adding new routes `config.routes`, but later should need to define new handler property in the `handlers` object.