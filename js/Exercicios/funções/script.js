const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2B',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2B',
    },
    
]


function alunosAprovados(arr, media) 
{
    let aprovados = []
    for(let i = 0; i < arr.length; i++) 
    {
        const {notas, nome} = arr[i]


        if(arr[i].nota >= media) {
            aprovados.push(nome)
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 5))