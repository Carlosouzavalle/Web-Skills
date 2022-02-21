function bestRockBand(band) {
    return new Promise((resolve, reject) =>{
        if(band == 'Metallica') {
            resolve({
                sucess: true,
                bandName: band,
                msg: band + ' is the best band ever!'
            })
        }
        else {
            reject({
                sucess: false,
                msg: 'I\'m not sure!'
            })
        }
    })
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if(response.sucess) {
            resolve('Master of puppets ' + response.bandName)
        } else {
            reject('do you know Metallica?')
        }
    })
}

// bestRockBand('Metallica')
//     .then(response => {
//         console.log('Checking the answer...')
//         return bestRockSong(response)
//     })
//     .then(response => {
//         console.log('Finding the best song...')
//         console.log(response)
//     })
//     .catch(err => {
//         console.log(err.msg)
//     })


    async function dothejog() {
        try{
            const bestRockBandResponse = await bestRockBand('Megath')
        console.log(bestRockBandResponse)
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse)
        console.log(bestRockSongResponse)
        } catch(err) {
            console.log(err.msg)
        }
    }

    dothejog()

    /*
        await é utilizado antes de uma chamada de uma promise
        só que ela só poder ser usada dentro de uma função
        com async


        fetch é uma promise interna do js que foi escrita pra vc trazer
        conteudo de uma determinada url
    */