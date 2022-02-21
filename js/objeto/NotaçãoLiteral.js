const Funcionarios = {
    // funcionarios1:{
    //     nome: 'pedro',
    //     idade: 22,
    // }
}

//adicionando um novo funcionario no objeto
//Funcionarios.funcionarios2 = {nome:'João',idade: 23}

//Array dentro do object
Funcionarios.funcionarios3 = {
    nome: 'Carlos',
    idade: 23,
    competencias: {
        linguagens: [
            'HTML',
            'CSS',
            'Javascript',
            'Bootstrap',
            'OOJS'
        ],
        EstilosMusicais: [
            'Rock',
            'MPB'
        ]
    }
}

console.log(Funcionarios.funcionarios3)