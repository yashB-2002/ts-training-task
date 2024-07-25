// Write a function that takes an array of numbers and returns a new array where each number is doubled.
//  Use TypeScript to define the function's parameter and return type.

// console.log(doubleArray([1, 2, 3]));
// Output: [2, 4, 6]



//! function type definition
type fun = (arr:Array<number>) => Array<number>

//! doubleArray function

const doubleArray:fun = (array) => {

    return array.map((elem:number)=>elem*2)
}

//! calling fn
let arrr = doubleArray([1,2,3,4])
console.log()
