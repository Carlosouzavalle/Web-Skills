// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.


// Podemos fazer de varias formas uma utilizando 4 consoles mais isso não é uma boa pratica d programação e 
// apenas vai poluir nosso codigo, então vamos utilizar apenas um console já que a ideia é apenas imprimir o valor na tela 
function mostraValores(a, b) {
    console.log(a + b, a - b, a * b, a / b)
    // console.log(a - b)
    // console.log(a * b)
    // console.log(a / b)
}

mostraValores(3, 3)