// // usando o map no array para dobrar os valores.
// const numeros = [1,2,3,4,5];
// // função dentro do parâmetro ( num => num * 2);
// const dobrados = numeros.map( num => num * 2);
// console.log(dobrados);


// // pegar somente os valores pares, outra função dentro do params
// const pares = numeros.filter(num => num % 2 === 0);
// console.log(pares);

// // função para imprimir o console.log dentro do parâmetro
// numeros.forEach(num => console.log(num));


// Função Personalizada
function operacao(n1, n2, callback){
    return callback(n1, n2);
    
}

const soma = (a, b) => a + b;
const multiplicacao = (a, b) => a * b;

console.log(operacao(5, 3, soma));
console.log(operacao(5, 3, multiplicacao));