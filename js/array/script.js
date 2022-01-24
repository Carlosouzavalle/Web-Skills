let array1 = ['string', 1, true]


let array2 = ['string', 2, true,['array1']]
console.log(array2[3])
array2.push([3])
console.log(array2)
array2.pop()
console.log(array2)
array2.unshift([4])
console.log(array2)
array2.shift()
console.log(array2)
array2.forEach(function (item, index) {console.log(item, index)}) // ele vai fazer uma repetição para cada item ou indice dentro de um array
console.log(array2)

console.log(array2.indexOf(2))
array2.splice(0, 2)
console.log(array2)
let newArray = array2.slice(0, 2)
console.log(newArray)


