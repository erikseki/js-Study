// adicionando valores no json array com o push e atualizando o .json

const fs = require('fs');

const novoAnimal = {
  "id": 1,
  "nome": "Cobra",
  "tipo": "nãosei",
  "habitat": "Amazonia"
};

const novoAnimal1 = {
  "id": 4,
  "nome": "Morcego",
  "tipo": "nãosei",
  "habitat": "nãosei"
};

// // exercicio 1 - ler arquivo json
const dado = require('../_json/animais.json');
console.log(dado);

// const novaBiblioteca = JSON.stringify(dado);

// // exercicio 2 - transformar em objeto com .parse
// const novaBibliotecaToObj = JSON.parse(novaBiblioteca);
// console.log(novaBibliotecaToObj);
// console.log(typeof (novaBibliotecaToObj));

// console.log(dado);
// console.log(typeof (dado));

// // exercicio 3 - adicionando um novo array com outro animal
// dado.animais.push(novoAnimal1);
// console.log(dado);

// // exercicio 4 - modificar uma chave de um array com o forEach ou map
// dado.animais.forEach(animais =>{
//   if (animais.id === 1 ){
//     animais.habitat = 'Pântano';
//   }
// })

// // diminuíndo todas as letras do valores da chave Habitat
// dado.animais = dado.animais.map(animais => {
//   return {
//     ...animais,
//     habitat: animais.habitat.toLowerCase()
//   }
// });



// // exercicio 5 - deletando um array inteiro com o filter 
// dado.animais = dado.animais.filter(animais => animais.id !== 4);

// // exercicio 6 - alterar o objeto para uma string 
// const toString = JSON.stringify(dado);
// console.log(typeof(toString));

// // exercicio 7 - imprima no console o objeto JavaScript resultante
// console.log(toString);


// para atualizar o arquivo JSON.
fs.writeFileSync('../json/animais.json', JSON.stringify(dado, null, 2), 'utf-8');
