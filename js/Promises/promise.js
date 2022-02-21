//promise é um objeto em javascript e o que a gente passa
// de parametro pra ele é uma  outra função
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve('Sucess')
    } else {
        reject('Failed')
    }
})


//quando vc tem uma promise criada vc chama apartir do then 
// quando o resolve é chamado e o catch quando o reject é chamado
p.then((message) => {
    console.log('This is the then' + message)
}) .catch((err) => {
    console.log('This is the catch ' + err)
})


