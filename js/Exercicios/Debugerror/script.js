function validaArray(arr, num)
{
    try{
            if(!arr && !num) 
        {
            throw new ReferenceError("Envie os Parametros")
        }

        if(typeof arr !== 'object')
        {
            throw new TypeError('O array precisa ser do tipo object')
        }

        if(typeof num !== 'number')
        {
            throw new TypeError('O array precisa ser do tipo number')
        }

        if(arr.length !== num)
        {
            throw new RangeError("Tamanho é invalido")
        }
        return arr
    }
    catch(e) 
    {
        if(e instanceof ReferenceError) 
        {
            console.log("Esse erro é um reference Error")
            console.log(e.message)
        } else if(e instanceof TypeError)
        {
            console.log("Esse erro é um Type Error")
            console.log(e.message)
        } else if(e instanceof RangeError)
        {
            console.log("Esse erro é um ranged Error")
            console.log(e.message)
        } else{
            console.log("Tipo de error não esperado" + e)
            console.log(e.stack)
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5]))