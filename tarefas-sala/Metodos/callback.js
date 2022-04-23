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

    const livrosQueLi = function(comprarLivros) { comprarLivros.filter((livro) => livro.jaleu === true)}
    console.log(livrosQueLi)