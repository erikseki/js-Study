const estudante = 'Fernando';
const estaAprovado = true;

if(estaAprovado == true){ // === 
    console.log('parabens, boas festas'); 

} else {
    console.log('reprovado, boas festas '); 
}


if (estudante === 'Fernando'){ 
    console.log(`Olá ${estudante}`);
} else{
    console.log('quem é você');
}

// diferente
console.log(5 != '5'); // o tipo não importa, vai responder false
console.log(5 != '6'); // aqui é diferente, true

//estritamente diferente
console.log(5 !== '5'); // true (valores iguais, mas tipos diferentes)
console.log(5 !== 5);   // false (valores e tipos são iguais)



