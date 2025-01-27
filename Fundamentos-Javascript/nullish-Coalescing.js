const nome = null;
// ?? nullish coalescing. Adicionando valor a variável quando ele é nulo/undefined
const nomeUsuario = nome ?? 'Visitante';
console.log(nomeUsuario);


// || quando é 0,"" ou false
// ?? quando é null ou undefined
const idade = 0;
const idadeComOu = idade || 18;
const idadeComNullish = idade ?? 18;

// retorna 18 porque 0 é considerado falsy
console.log(idadeComOu);
// retorna 0 porque 0 não é null ou undefined
console.log(idadeComNullish);


// não consigo mudar quando é do tipo boolean
const teste = false;

const novaConfig = teste ?? true;
console.log(novaConfig);
// retorna false 


const configUsuario = {
    tema: null,
    linguagem: undefined,
    notificacoes: true
}

// armazenando os valores das chaves em uma variável
// lembrando que, dessa maneira não altera o objeto 
const temaDoUsuario = configUsuario.tema ?? 'claro';
const linguagem = configUsuario.linguagem ?? 'pt-br';
const notificacoes = configUsuario.notificacoes ?? false;

console.log(temaDoUsuario); 
console.log(linguagem); 
console.log(notificacoes); 


// utilizando uma propriedade nula para atribuir valor a variável
const usuario = { nome: "Erik", configuracoes: null };

const tema = usuario.configuracoes?.tema ?? "claro";
console.log(tema); // "claro" (porque `configuracoes` é null)



// Encadeamento com Nullish, percorre todas as variáveis e imprime o primeiro valor que encontrar.
const preferenciaUsuario = null;
const preferenciaSistema = undefined;
const preferenciaPadrao = "Modo escuro";

const preferenciaFinal = preferenciaUsuario ?? preferenciaSistema ?? preferenciaPadrao;
console.log(preferenciaFinal); // "Modo escuro"









