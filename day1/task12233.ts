// Write a function that takes two numbers as arguments and returns their sum. Ensure the function parameters and return type are annotated.

// Complete Below Function 

// console.log(add(2, 3)); // Output: 5

type sumType = (a:number,b:number)=>number
const sumOfNumbers:sumType = (a:number,b:number):number => {
    return a+b;
}

console.log("sum of two number: "+sumOfNumbers(2,3))
