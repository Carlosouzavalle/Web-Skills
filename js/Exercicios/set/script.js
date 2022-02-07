const meuArray = [32, 312 ,3123,412,4124,243,22,22,3323,3232]

function valoresUnicos(arr) 
{
    const mySet = new Set(arr)

    return [...mySet]
}

console.log(valoresUnicos(meuArray))