// BIND, CALL AND APLLY
//Diferença entre call e aplly na hora de passar argumentos. enquanto no call os argumentos são mandados separados por pontoe virgula nó 
//os argumentos do apply vão ser passados dentro de um array 
// Bind: clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

const pessoa = {
    nome: 'Miguel'
}

const animal = {
    nome: 'Murphy'
}

function getSomenthing() {
    console.log(this.nome)
}

getSomenthing.call(animal)

//=============================================================



const myobj = {
    num1: 2,
    num2: 4,
}

function soma(a , b)
{
    console.log(this.num1 + this.num2 + a + b)
}

soma.apply(myobj, [1, 5])
//=============================================================

const retornaNomes = function() {
    return this.nome
}

let bruno = retornaNomes.bind({nome: 'Carlos'})

console.log(bruno())