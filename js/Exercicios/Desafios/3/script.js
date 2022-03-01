// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).


function Comprimentos(baixo, direita, esquerda) {
    if(esquerda == direita && direita == baixo && esquerda == baixo) {
        return 'Equilátero'
    } else if(esquerda == direita || direita == baixo || baixo == esquerda) {
        return 'Isósceles'
    } else {
        return ('Escaleno')
    }
}

console.log(Comprimentos(2,2,2))
console.log(Comprimentos(2,4,4))
console.log(Comprimentos(5,3,1))
