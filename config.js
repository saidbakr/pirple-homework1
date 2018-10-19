/**
 * The application's configurations and routes and their handlers
 */
// Creating empty handler object
 handler = {};
 handler.notFound = (data,callback) => {
     callback(404,{'error': 'Not found endpoint'})
 }
 handler.notAllowed = (data,callback) => {
    callback(405,{'error': 'Method not allowed'})
}
handler.hello = (data,callback) => {
    callback(200,{'msg': config.fixedMsg})
}
// Creating the config object
let config = {
    'port': 3000,
    'fixedMsg': 'Welcome t our RESTful API application',
    'allowedMethods': {
        'post': true
    },
    'routes': {
        'hello': handler.hello,
        'notFound': handler.notFound,
        'notAllowed': handler.notAllowed
    }
}

module.exports = config;
//module.exports.handler;