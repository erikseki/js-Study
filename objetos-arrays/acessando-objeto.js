
// objeto para armazenar diversos dados de uma pessoa
const estudante = {
    nome: 'josé silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'Javascript'
}

// função que recebe dois parâmetros, qual o objeto(estudante) qual o chave(nome,cpf)
function exibeInfoEstudante(objeto1, informacoesEstudante) {
    return objeto1[informacoesEstudante];
}

// atribuo o valor e ao mesmo tempo imprimo. esses dois eu chamo envio para os parâmetros da função. 
console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));


console.log(estudante.pet);
console.log(estudante['pet']);
// undefined  - uma propriedade que não existe 

//As propriedades de um objeto não são ordenadas, logo, não conseguimos acessar seus valores buscando por um índice numérico.


// é o mesmo que:
console.log(estudante['nome']);
console.log(estudante['cpf']);
// precisa chamar com o '' pois é um valor de um objeto e não uma variável
