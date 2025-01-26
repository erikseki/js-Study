let nomeEstudante; // declarei a variável porém sem valor = undefined
let telefoneEstudante = null; // variável com valor = nulo
const professora = 'Ana'; // string

console.log(nomeEstudante); // resultado undefined
console.log(typeof nomeEstudante); // tipo undefined
console.log(typeof professora); // tipo string

console.log(telefoneEstudante); // resultado "Null"

console.log(telefoneEstudante + 3); // retorna 3 = saiu de nulo e foi para 3
console.log(nomeEstudante + 3); // NaN, undefined 

console.log(typeof telefoneEstudante); // object