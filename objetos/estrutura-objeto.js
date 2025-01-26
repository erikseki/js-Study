
// objeto para armazenar diversos dados de uma pessoa
const estudante = {
    nome: 'josé silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'Javascript'
}

// notação de ponto. printar o valor de uma chave (id, nome...)
console.log(estudante.nome);
console.log(`o nome de estudante é ${estudante.nome}`);
// substring para printar até um certo caractere (apenas para strings). 
console.log(`os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`);


