// // tarefas que compilam uma após a outra, fluxo assíncrono
// // ocasiona callback hell, solução = Promises e async/await
// function tarefa1(callback){
//     setTimeout(() =>{
//         console.log("Tarefa 1 Concluída");
//         callback()
//     }, 2000);
// }

// function tarefa2(callback){
//     setTimeout(() =>{
//         console.log("Tarefa 2 Concluída");
//         callback()
//     }, 2000);
// }


// function tarefa3(){
//     setTimeout(() =>{
//         console.log("Tarefa 3 Concluída");
//     }, 2000);
// }


// tarefa1(() =>{
//     tarefa2(() =>{
//         tarefa3();
//     }); 
// });



// Refatorando esse Callback Hell para Promises

// return para chamar no fora da função 
// método new Promise
function tarefa1(){
    return new Promise(resolve =>{
        setTimeout(() =>{
        console.log("Tarefa 1 concluida");
        resolve();
    }, 1000)
    })
}


// posso utilizar o .then para encadear as tarefas(evita aninhamento)
tarefa1()
    .then(() => console.log("Todas as tarefas foram concluidas"));



// ou posso usar o async/await 
async function executarTarefas(){
    await tarefa1();
    console.log("Todas as tarefas foram concluídas");
}

executarTarefas();


