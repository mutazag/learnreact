httpapi = require('http')

httpserver = httpapi.createServer(
    (req, res) => {
        const requestModule = require('request');
        requestModule(
            'http://worldtimeapi.org/api/timezone/America/New_York', 
            (error, response, body) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                
                // get datetime from body
                var bodyJson = JSON.parse(body);
                var datetime = bodyJson.datetime;
                
                res.write(
                    `Hello World!, </br>
                    the time is ${datetime} </br> 
                    time zone is ${bodyJson.timezone} </br>
                    abbreviation is ${bodyJson.abbreviation}`);


                res.end();
        });



    }
);

httpserver.listen(80);