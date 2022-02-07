function sum(x, y, z) 
{
    return x + y + z    
}

const numbers = [1, 2, 3]

console.log(sum(...numbers))

// spread = uma forma de lidar separadamente com elementos
// a sintaxe dela é por os 3 potinhos na frente então x = 1, y = 2, z = 3
// o que era parte de um array se torna um elemento independente

//obs: O spread você usa quando ta chamando a função e o rest quando ta declarando a função
