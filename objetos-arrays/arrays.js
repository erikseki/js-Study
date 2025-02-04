// // Arrays padrões
// const listaCPFs = ['12312312312', '12312312312']; 

// const infosPessoas = ['nome', 'Erik', 'idade', 32];
// console.log(infosPessoas[1])



// tipos de dados em um array
const misto = [
    42, // number
    "Texto", // string
    true, // boolen
    { nome: "Erik" }, // object
    [1, 2, 3]]; // array
console.log(misto);

// adicionar elementos
const lista = ["A", "B"];
lista.push("C"); // Adiciona no final
lista.unshift("Z"); // Adiciona no início
console.log(lista); // ["Z", "A", "B", "C"]

// modificando um elemento pelo índice
const cores = ["Vermelho", "Azul", "Verde"];
cores[1] = "Amarelo";
console.log(cores); // ["Vermelho", "Amarelo", "Verde"]

lista.pop(); // Remove do final
lista.shift(); // Remove do início
console.log(lista); // ["A", "B"]

// encontrar elementos 
const nomes = ["Erik", "Lucas", "Maria"];
console.log(nomes.indexOf("Lucas")); // 1
console.log(nomes.indexOf("Pedro")); // -1 (não encontrado)


//verificar existência / boolean
console.log(nomes.includes("Maria")); // true
console.log(nomes.includes("Pedro")); // false











