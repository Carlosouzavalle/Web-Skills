function calculator() {
    const operation = Number(prompt ('Choose a operation:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - DivisãoReal (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'))

    if(!operation || operation > 6)
    {
        alert('Erro - operação invalida!')
        calculator()
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'))
        let n2 = Number(prompt('Insira o segundo valor:'))
        let resultado

        if(!n1 || !n2)
        {
            alert('Erro - parametros invalidos!')
            calculator()
        }
        else 
        {
            function soma() {
                resultado = n1 + n2
                alert(`O resultado de ${n1} + ${n2} é ${resultado}`)
                novaOperacacao()
            }
    
            function subtracao() {
                resultado = n1 - n2
                alert(`O resultado de ${n1} - ${n2} é ${resultado}`)
                novaOperacacao()
            }
    
            function multiplicacao() {
                resultado = n1 * n2
                alert(`O resultado de ${n1} * ${n2} é ${resultado}`)
                novaOperacacao()
            }
    
            function divisaoReal() {
                resultado = n1 / n2
                alert(`O resultado de ${n1} / ${n2} é ${resultado}`)
                novaOperacacao()
            }
    
            function divisaoInteira() {
                resultado = n1 % n2
                alert(`O resultado de ${n1} % ${n2} é ${resultado}`)
                novaOperacacao()
            }
    
            function potenciacao() {
                resultado = n1 ** n2
                alert(`O resultado de ${n1} ** ${n2} é ${resultado}`)
                novaOperacacao()
            }
    
            function novaOperacacao() {
                let opcao = prompt('Deseja fazer outra operação? \n 1- Sim\n 2 - Não')
    
                if(opcao == 1) 
                {
                    calculator()
                } 
                else if (opcao == 2) 
                {
                    alert('Até Mais!')
                } else {
                    alert('Digite uma nova opção!')
                    operation()
                }                
            }
        }
        switch(operation)
        {
            case 1:
                soma()
                break
            case 2:
                subtracao()
                break
            case 3:
                multiplicacao()
                break
            case 4:
                divisaoReal()
                break
            case 5:
                divisaoInteira()
                break
            case 6:
                potenciacao()
                break
        }
    }
}

calculator()