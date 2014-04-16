var fs = require('fs');

var leituraSync = function(arquivo) {
	console.log('Fazendo a leitura sincrona');
	var inicio = new Date().getTime();
	fs.writeFileSync(arquivo);
	var fim = new Date().getTime();

	console.log('bloquei sync: '+( fim - inicio )+'ms')
}

module.exports = leituraSync;