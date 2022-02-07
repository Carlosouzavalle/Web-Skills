function findMax() {
    let max = -Infinity

    for(let i = 0; i < arguments.length; i++) 
    {
        if(arguments[i] > max)
        {
            max = arguments[i]
        }
    }

    return max
}

findMax(1, 3, 4, 55, 6)

//Um array com todos os parâmetros passados quando a função foi invocada