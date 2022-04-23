// sort -> ordena uma lista

const produtos = ['mesa', 'geladeira', 'computador', 'fogão']

const listaOrdenada = produtos.sort()
console.log(listaOrdenada)

// ordenar numeros em decrescente
const numeros = [67, 98, 72, 21, 57, 3, 15]
const numerosDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosDecrescente)

//ordenar numeros em crescente
const numerosCrescente = numeros.sort((a,b) => a-b)
console.log(numerosCrescente)