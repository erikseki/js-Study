const notaFinal = 3;
const faltas = 5;

// operador || de "or"
if (notaFinal < 7 || faltas > 4){
    console.log('reprovado, boas festas');
} else {
    console.log('não foi reprovado por falta');
}

// operador && de "and"
if (notaFinal < 7 && faltas > 4){
    console.log('reprovado, boas festas');
} else {
    console.log('não foi reprovado por falta');
}