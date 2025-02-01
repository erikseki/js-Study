// // saudacao recebe mensagem como callback e a executa após a saudação.
// function saudacao(nome, callback){
//     console.log(`Olá, ${nome}`);
//     callback(); 
// }

// function mensagem(){
//     console.log("Bem vindo");
// }

// saudacao("Erik", mensagem);



// callback com parâmetros
// function processaNumero(num, callback){
//     const resultado = callback(num);
//     console.log(`Resultado é: ${resultado}`);
// }

// function dobrar(x){
//     return x * 2;
// }

// // passa 5 no processaNumero, o dobrar entra na callback,
// // o processaNumero calcula o callback(dobrar) e num (5) e armazena na var Resultado
// processaNumero(5, dobrar);




// // callback em métodos de array 

// const numeros = [1,2,3,4,5];

// // o Map calcula o array * 2 e armazena na variável
// const dobrados = numeros.map(num => num * 2);
// console.log(dobrados);

// const pares = numeros.filter(num => num % 2 === 0);
// console.log(pares);

// // o foEach só itera, não retorna um novo array, logo, não armazena em uma variável
// // pode chama-lo usando o método forEach direto.
// numeros.forEach(num => console.log(num * 3 ));


// // Callback em Funções Assíncronas (setTimeout, setInterval)
// console.log("Início...")
   
// setTimeout(() => {
//     console.log("Executado após 3 segundos");
// }, 3000);

// console.log("Fim...");




// // Callback em uma simulação de requisição assíncrona
// function buscarDados(callback){
//     console.log("Buscando Dados...");
//     setTimeout(() =>{
//         const dados = {nome: 'Erik', idade:24};
//         callback(dados);
//     }, 3000);
// }


// function exibirDados(dados) {
//     console.log(`Nome: ${dados.nome}, Idade: ${dados.idade}`);
// }

// buscarDados(exibirDados);






// tarefas que compilam uma após a outra, fluxo assíncrono
// ocasiona callback hell, solução = Promises e async/await
function tarefa1(callback){
    setTimeout(() =>{
        console.log("Tarefa 1 Concluída");
        callback()
    }, 2000);
}

function tarefa2(callback){
    setTimeout(() =>{
        console.log("Tarefa 2 Concluída");
        callback()
    }, 2000);
}


function tarefa3(){
    setTimeout(() =>{
        console.log("Tarefa 3 Concluída");
    }, 2000);
}


tarefa1(() =>{
    tarefa2(() =>{
        tarefa3();
    }); 
});




