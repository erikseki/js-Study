const biblioteca = [
    { id: 1, 
        titulo: "O Senhor dos Anéis", 
        autor: "J.R.R. Tolkien", 
        anoPublicacao: 1954 },

    { id: 2, 
        titulo: "Dom Quixote", 
        autor: "Miguel de Cervantes", 
        anoPublicacao: 1605 },

    { id: 3, 
        titulo: "1984", 
        autor: "George Orwell", 
        anoPublicacao: 1949 }
]


// function encontrarLivroPorId(lista, id){
//     const livrosEncontrados = lista.find(livros => livros.id === id);
//     return livrosEncontrados || null;

// }


// const filtroLivros = encontrarLivroPorId(biblioteca, 1);
// console.log(filtroLivros);

// const LivrosNãoEncontrados = encontrarLivroPorId(biblioteca, 10);
// console.log(LivrosNãoEncontrados);



function encontrarLivroPorId(lista, id){

    const livrosEncontrados = lista.find(livros => livros.id === id);

    if(livrosEncontrados){
        console.log(`O livro é: ${JSON.stringify(livrosEncontrados, null, 1)}`);
    } else {
        console.log(`não encontramos o seu pedido`);
    }
    return
}


const filtroLivros = encontrarLivroPorId(biblioteca, 1);

// const LivrosNãoEncontrados = encontrarLivroPorId(biblioteca, 10);
// console.log(LivrosNãoEncontrados);


