const estudante = {
    nome: "Erik",
    idade: 24,
    cpf: '23880760802',
    turma: 'javascript',
    bolsista: true,
    telefones: [11990220628, 11227330672],
    enderecos: [{
        rua: 'Ulisses Paschoal',
        numero: '74',
        complemento: 'apto 20'
    },
    {
        rua : 'Rua Dona Celwod',
        numero: '71',
        complemento: null,
    }]
}

// metodo do spread operator.

// função para printar os telefones de um objeto
function exibirTelefones(telefone1, telefone2){
    console.log(` Ligar para ${telefone1}`)
    console.log(` Ligar para ${telefone2}`)
}
// atribuir os índices dos dois telefones na função
exibirTelefones(estudante.telefones[0], estudante.telefones[1]);

// utilizando o spread operator para percorrer todos os telefones (viável)
exibirTelefones(...estudante.telefones);

// objeto utilizando o spread para puxar os endereços do estudante uma única vez
const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);


// se um objeto possuir chaves/propriedades iguais, ao utilizar o spread
// ele vai printar somente o ultimo pois toda vez, é substituido até o final
