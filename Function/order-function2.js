// FUNÇÕES QUE RETORNAM OUTRAS FUNÇÕES

function criarMultiplicador(multiplicador) {
    return function(numero){
        return numero * multiplicador;
    };
}

const dobrar = criarMultiplicador(2);
const multiplicar = criarMultiplicador(3);

console.log(dobrar(5));
console.log(multiplicar(5));
