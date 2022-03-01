const arr = [1, 2, 3, 4, 5]
// pass a function to map
const map1 = arr.map(x => x * 2)
console.log(map1)
// sem this

//com this
// const maca = {
//     value: 2,
// }

// const laranja = {
//     value: 3, 
// }

// function mapComThis(arr, thisArg) {
//     return arr.map(function(item){
//         return item * this.value
//     }, thisArg)
// }

// const nums = [1, 2]

// console.log('this => maça',mapComThis(nums, maca))
// console.log('this => laranja',mapComThis(nums, laranja))