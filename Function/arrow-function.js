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



// criei essa arrow function sozinho
// ele possui parâmetro e condicional 
const media = (notas, presenca) => {
    if(notas >= 5 && presenca >= 8){
        console.log(`a sua nota é ${notas} e a sua presença ${presenca}`);
    } else {
        console.log(" Infelizmente você não passou");
    }
}

console.log(media(5, 9));