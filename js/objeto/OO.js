class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo =  tipo
        this._saldo = 0 // convenão ela é pra ser acessada apenas internamente
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }


    sacar(valor) {
        if(valor > this._saldo) {
            return 'Operação negada'
        }
        this._saldo = this._saldo - valor


        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor

        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'poupanca'
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'universitaria'
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada'
        }

        this._saldo = this._saldo - valor
        return this._saldo
    }
}

// const minhaConta = new ContaCorrente(1, 234, true)
// console.log(minhaConta.saldo)
// console.log(minhaConta.depositar(1000))
// console.log(minhaConta.sacar(500))
// console.log(minhaConta.sacar(600))

const Contapoup = new ContaPoupanca(1, 234, true)
const Contaunive = new ContaUniversitaria(1, 234, true)

console.log(Contaunive.depositar(1000))
console.log(Contaunive.sacar(100))
