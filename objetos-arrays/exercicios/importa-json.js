// o import vem sendo usado muito porém precisa de outras coisas p/ rodar
// import estudante from './estudante.json'

// armazenar os dados do json em uma variável e imprimi-lo
const estudante = require('./estudante.json'); // nativo do node

// console.log(estudante);
// console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);

const values = Object.values(estudante);
console.log(values);