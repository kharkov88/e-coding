let 
	http = require('http'),
    express = require('express'),
    bodyParser = require("body-parser"),
    jsonParse = bodyParser.json(),
	fs =require('fs'),
    app = express(),
    count = 0,
    ppls_list = [],
    server = http.createServer(app);
    //io = socket.listen(server);


app.use( express.static( __dirname + '/public' ) );
app.get( '*', function ( request, response ) { 
    response.redirect( '/' );
}); 


let port = process.env.PORT || 4001;
server.listen(port);
console.log('Express-сервер прослушивает порт %d в режиме %s',
	        server.address().port, app.settings.env);