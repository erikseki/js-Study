const estudante = 'Carol'; 

if (1 > 0) {
    console.log(estudante);
}


// fora do escopo, se eu declaro uma variável sem tipo de dado, o js cria automaticamente como var 

// js possui 3 escopos - bloco, função e global
// bloco - dentro do if 
// o global (que fica fora) podem ser acessadas e modificadas dentro dos blocos
// função, - chamar ou modificar somente dentro da função
// bloco - somente dentro do bloco, entre {} como o let e const