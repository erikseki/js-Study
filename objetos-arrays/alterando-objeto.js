// objeto para armazenar diversos dados de uma pessoa
const estudante = {
    nome: 'josé silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'Javascript'
}

// para criar uma chave e valor no objeto "estudante"
estudante.telefone = '5511990220628';
console.log(estudante.telefone);

// alterando uma propridade/chave que já existe.
estudante.nome = 'José souza';
console.log(estudante);

// criando um objeto vazio e depois adicionando propriedades.
const estudante2 = {};
estudante2.nome = 'Ana Maria';
console.log(estudante2);