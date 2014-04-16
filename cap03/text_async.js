var fs = require('fs');

for(var i=1; i<=5; i++) {
	var file = 'sync-text'+i+'.txt';
	var out  =  fs.writeFile(file, "Hello World NodeJS!", function(err, out) {
			console.log(out);
	})
}