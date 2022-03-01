function filttraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 !== 0 
}

const arr2 = [1 , 2, 4, 5 ,6 , 7, 8, 3] 

console.log(filttraPares(arr2))