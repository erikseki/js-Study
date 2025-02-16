const estudante = {
    nome: "Erik",
    idade: 24,
    cpf: '23880760802',
    turma: 'javascript',
    bolsista: true,
    telefones: [11990220628, 11227330672],
    // enderecos: [{
    //     rua: 'Ulisses Paschoal',
    //     numero: '74',
    //     complemento: 'apto 20'
    // },
    // {
    //     rua : 'Rua Dona Celwod',
    //     numero: '71',
    //     complemento: null,
    // }]
}


// // método object.keys para puxar as chaves do objeto. lsitada em formato 'String'
// const chavesObjeto = Object.keys(estudante);
// console.log(chavesObjeto);

// // variavel com negação no método de includes para verificar se possui o objeto endereço
// if(!chavesObjeto.includes('enderecos')){
//     console.error(` é necessário ter um endereço cadastrado.`);
// }

// retorna apenas valores do objeto 
const valuesObjeto = Object.values(estudante);
console.log(valuesObjeto);

// retorna chaves e valores e cada um deles em um array
const entriesObjeto = Object.entries(estudante);
console.log(entriesObjeto);
