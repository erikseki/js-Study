const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}

console.log(objPersonagem);

// delete na chave "Aliado" é um objeto e ao deletar, retira todas as propriedades dentro dele
delete objPersonagem.aliado;
console.log(objPersonagem);

// deletando a propridade 'status' com colchetes
delete objPersonagem["status"];
console.log(objPersonagem);

// deletando chave dentro do objeto "aliado"
delete objPersonagem.aliado.classe;
console.log(objPersonagem);




