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

for ( let chave in estudante){
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
}

for ( let chave in estudante){
    console.log(`${chave} é ${estudante[chave]}`);
}


for ( let chave in estudante){
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function' && tipo !== null) {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
}}

// uma versão refatora e mais simples do código acima. 
for ( let chave in estudante){
    const tipo = estudante[chave];
    if (typeof tipo !== 'object' && typeof tipo !== 'function' && typeof tipo !== null) {
        console.log(`a chave ${chave} tem o valor ${tipo}`);
}}

// É importante lembrar que em JavaScript, o typeof para array também retorna "object". Não há um "typeof array", específico para array.
// um objeto é uma estrutura de dados complexa e o JavaScript não consegue converter para string



// exibir somente as propriedades do objeto que não são classificadas como objetos ou funções
for (let info in estudante) {
    if (!(typeof estudante[info] === "object" || typeof estudante[info] === "function")) {
      console.log(`${info} ==> ${estudante[info]}`);
    }
  }