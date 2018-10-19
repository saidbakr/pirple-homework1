/**
 * The application's configurations and routes
 */
// Creating empty handler object
const handler = {}
// Creating the config object
let config = {
    'port': 3000,
    'fixedMsg': 'Welcome t our RESTful API application',
    'routes': {
        'hello': handler.hello,
        'notFound': handler.notFound,
        'notAllowed': handler.notAllowed
    }
}

module.exports = config;
module.exports.handler;