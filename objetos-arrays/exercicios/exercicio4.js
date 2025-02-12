// exercicio 1

// const pessoa = {
//     nome: "Erik",
//     idade: 24, 
//     solteiro: true,
//     hobbies: [
//         "desenhar",
//         "programar",
//     ],

// };

// pessoa.pais = "Brasil";
// console.log(pessoa);


// function mostrarInfoPessoa (pessoaObject){
//     console.log(`${typeof pessoaObject.nome}`);
//     console.log(`${typeof pessoaObject.idade}`);
//     console.log(`${typeof pessoaObject.solteiro}`);
//     console.log(`${typeof pessoaObject.hobbies}`);
// }

// mostrarInfoPessoa(pessoa);






// exercicio 2


// const pessoa = {
//     nome: "Erik",
//     idade: 24, 
//     solteiro: true,
//     hobbies: [
//         "desenhar",
//         "programar",
//     ],

// };


// console.log(pessoa);

// function mostrarInfoPessoa (pessoaObject){
//     pessoa.endereco = {
//         rua: 'Ulisses Paschoal',
//         cidade: 'São Paulo',
//         estado: "SP",
//     }
//     console.log(pessoaObject);
//     console.log(pessoaObject.endereco);
// }

// mostrarInfoPessoa(pessoa);







//// exercicio 3

// const listaPessoas = [
//     { nome: "João", idade: 30, cidade: "São Paulo" },
//     { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
//     { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
// ];

// function mostrarListaPessoas(pessoas) {
//     console.log("Lista de Pessoas:");
//     pessoas.forEach(pessoa => {
//         console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
//     });
// }

// function filtrarPorCidade(pessoas, cidade) {
//     return pessoas.filter(pessoa => pessoa.cidade === cidade);
// }