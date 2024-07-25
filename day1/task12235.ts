// Create a function that takes a parameter which can either be a string or a number. The function should return the parameter as a string.

// Complete stringify method :

// console.log(stringify(123)); 
// Output: "123"

// console.log(stringify('hello')); 
// Output: "hello"


//! function should be a type of func
type func = (val:string|number)=>string


//! main function to return number
const stringify:func = (str):string => {
    if(typeof str === 'number') return str.toString();
    return str;
}

//! fn calling
console.log(stringify(123))
console.log(stringify('123'))
