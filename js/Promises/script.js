function sumNumber()
{
    let result = 1 + 1

    if(result == 2)
    {
        successCallBack()
    } 
    else
    {
        errorCallBack()
    }
}


function successCallBack()
{
    console.log('Yeah! Number 2!')
}

function errorCallBack()
{
    console.log('Ooops! Somenthing is wrong.')
}

sumNumber()