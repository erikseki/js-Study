const estudantes = require('../_json/estudante.json');

function ordena(listas, propriedade){
    // sort - ordenar uma propriedade por parâmetro
    return listas.sort((a, b) => {

        if(a[propriedade] < b[propriedade]) return -1;
        if(a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

const listaOrdenada = ordena(estudantes, 'nome');
console.log(listaOrdenada);

// Essa função recebe dois parâmetros:
// listas: o array de estudantes (ou qualquer outro array de objetos);
// propriedade: a chave pela qual os objetos devem ser ordenados (exemplo: 'nome' ou 'idade').

// Se o valor de a[propriedade] for menor que b[propriedade], retorna -1, ou seja, "a" vem antes de "b".
// Se for maior, retorna 1, "b" vem antes de "a".
// Se forem iguais, retorna 0, ou seja, mantém a ordem original.