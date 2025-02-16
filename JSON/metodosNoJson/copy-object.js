const objetooriginal = {chave: 'valor'};
const copiaProfunda = JSON.parse(JSON.stringify(objetooriginal));

copiaProfunda.chave = 'novovalor';
console.log(objetooriginal.chave);