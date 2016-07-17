var http = require('http');
var dispatcher = require('httpdispatcher');
var $ = require('jquery');

const PORT = 8080;
const WEATHER_API_KEY = '3f6fdb624410ebd46983c7a9534972be';

//We need a function which handles requests and send response
//Lets use our dispatcher
function handleRequest(request, response) {
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch (err) {
        console.log(err);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});

//A sample GET request    
dispatcher.onGet("/", function(req, res) {
    var url = "api.openweathermap.org";
    var options = {
        host: url,
        port: 80,
        path: '/data/2.5/forecast/city?id=524901&APPID=3f6fdb624410ebd46983c7a9534972be',
        method: 'GET'
    };

    http.request(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');
        response.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(chunk);
        });
    }).end();
});

//A sample GET request    
dispatcher.onGet("/page1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
});    

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});