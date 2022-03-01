// function somaNumeros(arr) {
//     return arr.reduce(function(prev, current) {
//         return prev + current
//     })
// }
// const arr = [1, 2]
// console.log(somaNumeros(arr))


const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cafe',
        preco: 20
    },
    {
        name: 'acucar',
        preco: 15
    },
    {
        name: 'biscoito',
        preco: 5
    }
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada ', index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))