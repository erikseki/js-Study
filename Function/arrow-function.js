// arrow function se houver estruturas maiores
const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

// arrow function menor 
const exibeNome = (nome) => { return nome };
 
console.log(estudanteReprovou(6,5));
console.log(estudanteReprovou(10, 2));
console.log(exibeNome(""));

