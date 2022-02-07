// function funcao()
// {
//     console.log('Pegou')
// }

// funcao()

// com parametro
// function mensagem(primeiro, segundo) 
// {
//     console.log(primeiro, segundo)
// }

// mensagem('Tudo certo', 'jovem!')

//expressão de função
// var funcao = function funcao()
// {
//     console.log('Pegou')
// }
// funcao()

// sem o nome também funciona
// var funcao = function()
// {
//     console.log('Pegou2')
// }
// funcao()

//arrow function

var funcao = () =>  {console.log('Arrow function')}

funcao()

//ARROW FUNCTION 
// this sempre será objeto global. métodos para alterar seu valor não irão funcionar
// não existe o objeto arguments
// o construtor (ex: new MeuObjeto()) também não pode ser utilizado