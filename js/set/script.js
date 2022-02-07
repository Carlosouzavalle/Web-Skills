// Set são estruturas  que armazenam apenas valores unicos
// em vez da propriedade length, consulta-se o número de registro  pela propriedade size
//não possui os metodos map,filter e reduce etc..


const mySet = new Set()

mySet.add(1)
mySet.add(5)

console.log(mySet.has(1))
console.log(mySet.has(3))
mySet.delete(1)
console.log(mySet)