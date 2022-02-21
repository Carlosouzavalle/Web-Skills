class pai {
    constructor(nome, sobrenome) {
        this.nome = 'jose'
        this.sobrenome = 'souza'
    }
}

class Filho extends pai {
    constructor(nome, sobrenome) {
        super(sobrenome) 
        this.nome = 'Carlos'

        /*
        A palavra-chave super é usada 
        para acessar o objeto pai de um objeto, em outros casos, é
        usada para acessar a classe pai de uma classe. 
        */
    }
}

const filho = new Filho
console.log(filho)

// Um pouco de herança em objeto utilizando classe