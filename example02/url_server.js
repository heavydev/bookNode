var http = require('http');
var url  = require('url');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<h1>Dados da queryString</h1>");
	var result = url.parse(request.url, true);


	for(var key in result.query) {
		response.write('<h3>'+key+' : '+result.query[key]+'</h3>');
	}

	response.end();

});

server.listen(3000, function() {
	console.log('server rodando ...');
});