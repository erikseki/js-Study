// métodos transformando JSON > strings e convertendo de strings > objetos

const estudante = require('./exercicios/estudante.json');

// converte o json para string
// manipulação de json backend com JSON.stringfy => biblioteca do node.
const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);

// // se eu puxar .nome, aparece undefined pois o json virou uma string inteira.
// console.log(stringEstudante.nome);

// agora com o .parse, consigo puxar as chaves do objEstudante 
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante.nome);
console.log(typeof objEstudante);