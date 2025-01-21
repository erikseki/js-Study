const notaFinal = 3;
const faltas = 5;
const advertencias = 0;

// já que o 0 é definido como false, o uso do "!" de negação vai dizer que 
// é true.
if (faltas >= 5 && !advertencias) {
    console.log('bonus recebido');
} else {
    console.log('bonus não recebido');
}