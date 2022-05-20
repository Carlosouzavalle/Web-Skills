// // maneira mais antiga

// var x = 10
// // maneiras mais nova

// let b = 2
// {
//     let b = 3
//     console.log(b)
// }
// console.log(b) 
// const y = 3

//tipos de dados 

// const name = 'Carlos'
// console.log(name)
// console.log(typeof name)

// const isAproved = false 
// console.log(isAproved)
// console.log(typeof isAproved)

// let surname = null
// console.log(surname)
// console.log(typeof surname)

// let age
// console.log(age)
// console.log(typeof age)

// const linguagens = ['Js', 'java', 'python', 'php']
// console.log(linguagens)
// console.log(typeof linguagens)

// const user = {email: 'user@gmail.com', password: '123', age: 30} // object
// console.log(user)
// console.log(typeof user)

// metodos string

// const fullName = 'Carlos Eduardo'
// console.log(fullName.length)

// const stringToArray = fullName.split(' ') 
// console.log(stringToArray)

// console.log(fullName.toLowerCase())
// console.log(fullName.toUpperCase())
// console.log(fullName.indexOf('Eduardo'))
// console.log(fullName.slice(0, 6))

//metodos de array

// const list = ['a', 'b', 'c', 'd', 'e']
// console.log(list.length)
// console.log(list[2])
// list.push('f')
// console.log(list)
// list.pop()
// console.log(list)
// list.shift()
// console.log(list)
// list.unshift('a')
// console.log(list)


// object

// const product = {
//     name: 'camisa',
//     price: 20,
//     inStock: 10,
//     sizes: ['P', 'M', 'G'],
//     'Main color': 'Blue'
// }

// console.log(product.name)
// console.log(product['Main color'])

//Destruturing

// const {price, inStock} = product

// console.log(price)
// console.log(inStock)

// const [n1, n2] = list 

// console.log(n1)
// console.log(n2)

//Estrutura Condicional

// const a = 11
// const b = 'Sla'

// if(a > 10) {
//     console.log('A é maior que 10')
// }

// if(a === 10) {
//     console.log('A é igual 10')
// } else if(b === 'Carlos') {
//     console.log('Achamos o meliante')
// } else{
//     console.log('o cara sumiu')
// }

// if ternario

// let a = 2

// let numero = a < 3 ? 'Yes' : 'Not'
// console.log(numero)

// Estrutura de Repetição

// const myList = [1, 2, 3, 4, 5]
// let counter = 0

// while(counter < myList.length) {
//     console.log(myList[counter])
//     counter++
// }

// const mySecondList = [1, 2, 3, 4, 5, 6]

// for(let counter = 0; counter < mySecondList.length; counter++) {
//     console.log(mySecondList[counter])
// }

//metodos de array repetição

// const nomes = ['Carlos', 'Ana', 'bruna', 'fernanda']

// nomes.forEach(function(nome) {
//     console.log(`O nome é ${nome}`)
// })

// const modifiedNames = nomes.map(function(nome) {
//     if(nome === 'Carlos') {
//         return nome = 'Cadu'
//     } else {
//         return nome
//     }
// })
// console.log(modifiedNames)

// const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function(numbers) {
//     return numbers >= 5
// })

// console.log(bigNumbers)

// const sumAll = [10, 20 ,30, 40, 50].reduce(function(total, number) {
//    return total + number 
// })

// console.log(sumAll)

// Funções 

// function Myfunction() {
//     console.log('Ola function')
// }
// Myfunction()

// // arrow function
// const saySomething = () => {
//     return 'im here'
// }
// console.log(saySomething())

// Classes

// class product {
//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     productDetails() {
//         return `O nome do produto é ${this.name} e o preço é ${this.price}`
//     }
// }

// const socks = new product('Meia Branca', 10.99)
// const shirt = new product('Camisa Branca', 16.99)

// console.log(socks.name)
// console.log(socks.price)

// console.log(shirt.productDetails())

// class SuperProduct extends product{
//     constructor(name, price, size) {
//         super(name, price)
//         this.size = size
//     }

//     static sayHello() {
//         console.log('Hello')
//     }
// }
// SuperProduct.sayHello()

//DOM 

const title = document.getElementById('title')

console.log(title)

//query selector

const sameTItle = document.querySelector('.title')
console.log(sameTItle)

const text = document.querySelectorAll('#text')
console.log(text)

// manipulando elementos

title.textContent = 'Mudei o Texto'

title.innerHTML = '<span>Aqui Mudou</span>'