function tratarErroreLancar(erro) 
{
    throw new Error('...OPS DEU RUIM!!!')
    throw
}


function imprimirNomeGritado(obj)
{
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroreLancar(e)
    } finally {
        console.log('final')
    }

} 

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)