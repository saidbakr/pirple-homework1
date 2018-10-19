/**
 * The application's configurations and routes
 */
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