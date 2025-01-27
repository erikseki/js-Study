// vai imprimir 1 até 5 
// i recebe 1, se i for menor ou igual a 5, i++ acrescenta
for (let i = 1; i <=5; i++){
    console.log(i)
}

// a mesma coisa com o while
let i = 1;
while (i <= 6){
    console.log(i);
    i++
}


// percorre o array para informar em qual posição está o 3
const numero = [1,2,3,4,5];

let index = 0;

while(index < numero.length){
    if ( numero[index] === 2){
        console.log(` Número 2 encontra-se na posição`, index);
        break;
    }
    index++
}

// percorre o array e imprime todas as cores.
const cores = ['vermelho', 'azul', 'verde'];
cores.forEach(cor => {
    console.log(cor);
})

// array e soma = 0, para cada numero do array, soma e armazena na variável soma
const numeros = [10, 20, 30, 40];
let soma = 0;
numeros.forEach(numero =>{
    soma += numero;
})

console.log(soma);



// array de animais, percorre o array e imprime o indice e o animal de cada um
const animais = ['cachorro', 'gato', 'cavalo'];
animais.forEach((animal, index) => {
    console.log(`indice ${index} ${animal}`);
});



