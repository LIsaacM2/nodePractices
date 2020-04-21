const parametros = process.argv.slice(2);
const n1= parseFloat(parametros[0]);
const op = parametros[1];
const n2= parseFloat(parametros[2]);

switch(op){
	case "mas":
	result = 'Suma: ' + parseFloat(n1 + n2);
	break;

	case "menos":
	result = 'Resta: ' + parseFloat(n1 - n2);
	break;

	case "por":
	result = 'Multiplicación: ' + parseFloat(n1 * n2);
	break;

	case "entre":
	result = 'División: ' + parseFloat(n1 / n2);
	break;
}

console.log(result);