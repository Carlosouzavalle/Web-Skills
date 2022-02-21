class Lancamento {
    /*
      constructor é a função que por padrão é chamada no momento que a classe for instaciada usando o operador new
    */
    constructor(nome = 'Genérico', valor = 0)
    {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinaceir{
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addlancametos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado +=l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinaceir(6, 2018)
contas.addlancametos(salario, contaDeLuz)
console.group(contas.sumario())

/*
    Polimorfismo objetos podem herdar a mesma classe pai, mas se comportarem de forma diferente
    quando invocamos seus métodos

*/