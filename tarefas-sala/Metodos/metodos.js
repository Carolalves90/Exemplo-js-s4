
const livros = [
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
    }
]

//filter : retorna um array com os itens filtrados

//filter
//funcao callback
//funcao anonima
//arrow function

const filtraLivroQueLi = function(livro) {
    if(livro.jaLeu === true){
        console.log(livros.nome)
    }
}

livros.filter(filtraLivroQueLi) //como chamar?? console.log(filtraLivroQueLi(livros))

//arrow function // funcao de seta

const livrosQueJaLi = livros.filter((livro) => {
    if(livro.jaLeu === true) {
       livro.nome
    }
  })

  console.log(livrosQueJaLi)
  
  //map retorna um novo array com as informacoes 
  //que eu passar na minha funcao callback
  
  livros.map((livro) => console.log(livro.numeroPagina))
  
  //Usando estrutura de repetição para retornar nome dos livros
  for (let livro = 0; livro < livros.length; livro++) {
    console.log(livros[livro].nome)
  }