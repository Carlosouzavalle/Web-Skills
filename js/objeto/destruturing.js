const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'Jhon',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getfullName({fullName: {firstName: first, lastName: last}}) 
{
    return `${first} ${last}`;
}

userId(user)
getfullName(user)

// entre chaves {}  podemos filtrar apenas os dados que nos interessa em um  objeto