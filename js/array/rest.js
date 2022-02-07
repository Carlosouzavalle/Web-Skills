function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho(2, 3) // 2
confereTamanho(2, 5, 4) // 3

// rest = combina os argumentos em um array
// o que era um elemento independente se torna parte de um array


//obs: O spread você usa quando ta chamando a função e o rest quando ta declarando a função