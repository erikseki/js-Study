function saudacao(nome){
    return function(){ // return para chamar fora da função
        console.log(`Olá ${nome}`)
    };
}


const comprimentar = saudacao("Erik"); // armazenar o valor na variável
comprimentar();




function contador(){
    let count = 0; // contador começa 0 

    return {
        incremento: function(){ // aumentar o contador 
            count++;
            console.log("Contandor adicionado");
        },
        decremento: function(){ // reduzir o contador
            count--;
            console.log("Contador Removido");
        },
        obterValor: function(){ // atualizar o contador
            return count;
        }
        
    };
}

const meuContador = contador(); // armazena a function na variável
meuContador.incremento(); // executa incremento 
meuContador.incremento(); // executa incremento 
meuContador.decremento(); // diminui incremento 
// imprime o valor atualizado do contador;
console.log(`Meu contador é: ${meuContador.obterValor()}`); 




// esse eu fiz por conta própria. Consegui fazer !!!
function contador(){

    let count = 0;

    return {
        incremento: function(){
            count++;
            console.log("Contador Adicionado");
        },
        decremento: function(){
            count--;
            console.log("Contador Removido");
        },
        obterValor: function(){
            return count;
        }
    }
}


const contadorAtualizado = contador();
contadorAtualizado.incremento();
contadorAtualizado.incremento();
console.log(`O contador é: ${contadorAtualizado.obterValor()}`)