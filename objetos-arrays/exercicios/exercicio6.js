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

const dado = require('../json/animais.json')

console.log(dado);

// const novaBiblioteca = JSON.stringify(dado);

// const novaBibliotecaToObj = JSON.parse(novaBiblioteca);
// console.log(novaBibliotecaToObj);
// console.log(typeof (novaBibliotecaToObj));

// console.log(dado);
// console.log(typeof (dado));

dado.animais.push(novoAnimal1);
console.log(dado);

fs.writeFileSync('../json/animais.json', JSON.stringify(dado, null, 2), 'utf-8');
