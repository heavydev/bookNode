var http = require('http');
var fs   = require('fs');
var url  = require('url');

var server = http.createServer(function(request, response) {
	var pathFile = url.parse(request.url);
	console.log("Path ", pathFile.pathname);
	if(pathFile.pathname == '/') {
		pathFile.pathname = 'index.html';
	} else if(pathFile.pathname != "/artigos.html" && pathFile.pathname != '/contato.html') {
		pathFile.pathname = 'error.html';
	} 
	console.log("Parse ", pathFile.pathname);
	
	fs.readFile(__dirname+'/'+pathFile.pathname, function(err, html) {
		response.writeHead(200, {'Content-Type':'text/html'});
		response.write(html);
		response.end();
	});
	
	//response.end();
});

server.listen(3000, function() {
	console.log('server on ...');
})