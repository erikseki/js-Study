
// vai executar imediatamente 
(function() {
    console.log("executado imediatamente");
})();


// IIFE com arrow function
(() => {
    console.log("IIFE com arrow function");
})();


// IIFE com arrow function e parâmetros
((nome) => {
    console.log(`Meu nome é ${nome}`)
})("Erik");



// IIFE com retorno de valor 
const resultado = (function() {
    return "Retorno da IIFE";
})();

console.log(resultado);




// IIFE para criar um Escopo Privado
// contador para incrementar e printar
const contador = (function() {
    let count = 0;
    return {
        incrementar: () => ++count,
        obterValor: () => count
    };
})();

console.log(contador.obterValor());
contador.incrementar();
console.log(contador.obterValor());
contador.incrementar();
console.log(contador.obterValor());
contador.incrementar();
console.log(contador.obterValor());







