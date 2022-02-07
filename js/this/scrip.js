const pessoa = {
    firstName: 'Carlos',
    lastName: 'Eduardo',
    id: 1,
    fullname: function()
    {
        return this.firstName + ' ' + this.lastName
    },
    getId: function() 
    {
        return this.id
    }
}

pessoa.fullname()
pessoa.getId()

console.log(pessoa.fullname())
console.log(pessoa.getId())


// A palavra reservada this é referencia ao contexto, no exemplo, this se refere ao objeto pessoa