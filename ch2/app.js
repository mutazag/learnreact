require('http').createServer( (req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write('Hello World');
    resp.write('<br>');
    var reqHeaders = req.headers;
    // req.headers is an object
    // for each key in the object, print the key and value
    for (var key in reqHeaders) {
        resp.write(`${key}: ${reqHeaders[key]} <br>`);
    }

    resp.end()
}).listen(npm_package_config_port);