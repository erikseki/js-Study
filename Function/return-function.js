// function multiplica(a, b) {
//     return a * b; // Retorna o produto
// }

// // Usa o retorno diretamente
// console.log(multiplica(3, 7)); // Saída: 21

// // Usa o retorno como parte de outro cálculo
// const total = multiplica(3, 7) + 10; 
// console.log(total); // Saída: 31

// function soma(a, b) {
//     return a + b; // Retorna o resultado da soma
// }

// const resultado = soma(4, 6); // O valor retornado (10) é armazenado na variável
// console.log(resultado); // Saída: 10





// function multiplica(a, b){
//     return a * b;
// }

// console.log(multiplica(3,7));

// const total = multiplica(3, 7) + 10;
// console.log(total);




// // usando o return, precisamos colocar o console.log nas chamadas das funções
// function exibeInfoEstudante(nome, nota){
//     return `o nome é ${nome} e a nota é ${nota}`;
// }
// console.log(exibeInfoEstudante('Caroline', 10)); // <= chamadas de função com console.log devido ao return


// retorno de função em forma de OBJETO
function criarUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}
let usuario = criarUsuario("Erik", 25);
console.log(usuario); // Saída: { nome: 'Erik', idade: 25 }
