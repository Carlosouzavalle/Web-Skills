function getAdmins(map)
{
    let admins = []
    for([key, value] of map) 
    {
        if(value == 'admin')
        {
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map()

usuarios.set('Luiz', 'admin')
usuarios.set('Carlos', 'admin')
usuarios.set('Bruno', 'estagiario')
usuarios.set('Leo', 'admin')


console.log(getAdmins(usuarios))