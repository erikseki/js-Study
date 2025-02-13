const estudantes = require('./json/estudante.json');


function buscaInformacao (lista, chave, valor){
    // com o ""=== valor" ele procura pelo string, no caso do telefone que está dentro do array, ele não imprime(undefined)
    // return lista.find((estudante) => estudante[chave] === valor);
    // com o "".includes", ele busca a primeira string do nome e o telefone, acessa o array e procura o valor.
    return lista.find((estudante) => estudante[chave].includes(valor));

}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '9466883489');

console.log(estudanteEncontrado);
console.log(telefoneEstudante);