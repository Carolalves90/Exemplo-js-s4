//criar e acessar valores (objeto e array)
// //Crie objetos e arrays e acesses os valores
// a) array lista de compras 
// b) objeto livro (nome, autora, pagina, anoPublicao, jaLeu)
// c) Criar um array com varios objetos de livros

//Criando array lista de compras
const comprarMercado = ['Leite', 'Cereal', 'frutas', 'Pães', 'Frios', 'Tapioca']
for(let compras = 0; compras < comprarMercado.length; compras ++){
    console.log(comprarMercado[compras])
}

// objeto livro (nome, autora, pagina, anoPublicao, jaLeu)
const informaLivro = {
    nome: 'Bloom into you (Yagate Kimi ni Naru)',
    autor: 'Nio Nakatani',
    numeroPagina: '180 páginas',
    genero: 'Mangá',
    anoPublicacao: '2019',
    numeroEdicao: '8 edição',
    jaLeu: true
}
console.log(informaLivro)

//Criar um array com varios objetos de livros
const comprarLivros = [
    {
        nome: 'Bloom into you (Yagate Kimi ni Naru)',
        autor: 'Nio Nakatani',
        numeroPagina: '180 páginas',
        genero: 'Mangá',
        anoPublicacao: '2019',
        numeroEdicao: '8 edição',
        jaLeu: true
    },
    {
        nome: 'Jujutsu Kaisen',
        autor: 'Gege Akutami',
        numeroPagina: '192 páginas',
        genero: 'Mangá',
        anoPublicacao: '2020',
        numeroEdicao: '1 edição',
        jaLeu: false
    },
    {
        nome: 'Demon Slayer',
        autor: 'Koyoharu Gotoge',
        numeroPagina: '192 páginas',
        genero: 'Mangá',
        anoPublicacao: '2020',
        numeroEdicao: '1 edição',
        jaLeu: true
    }]
    
    console.log(comprarLivros[1].nome)

