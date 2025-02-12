const jsonAnimais = require('./animais.json');


console.log(jsonAnimais);

// Convertendo o objeto em uma string JSON
const stringJSON = JSON.stringify(jsonAnimais);

console.log(typeof stringJSON); // "string"
// console.log(stringJSON); // Exibe o JSON como string



const objetoNovo = JSON.parse(stringJSON);
console.log(objetoNovo);
console.log(typeof(objetoNovo));