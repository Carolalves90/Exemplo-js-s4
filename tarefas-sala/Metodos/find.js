// find: retorna apenas um item especifico pesquisado

const produtos = ['mesa', 'geladeira', 'computador', 'fogão']

// const funcaoCallback = function(){
//     if(produto === 'geladeira'){
//         console.log(produto)
//     }
// }

const encontraGeladeira = produtos.find(item => item === 'geladeira')
console.log(encontraGeladeira)

const encontraFogao = produtos.find(item => item === 'fogão')
console.log(encontraFogao)