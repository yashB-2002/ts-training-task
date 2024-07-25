// Write a type guard function that checks if a value is an instance of a class Dog. 
// Then, create a function that takes an array of mixed objects and returns only the objects that are instances of Dog.

// const animals = [new Dog(), new Cat(), new Dog()];
// console.log(filterDogs(animals));
// Output: [Dog, Dog]


//! empty classes
class Dog {
    
}

class Cat {
    
}

//!generics

//! main function definition
// Generic filter function
function filterDogs<T>(objects: T[]): Dog[] {
  return objects.filter(obj => obj instanceof Dog) as Dog[];
}

// Test cases
const animals1 = [new Dog(), new Cat(), new Dog()];
const animals2 = [new Cat(), new Cat(), new Cat()];

console.log(filterDogs(animals1)); // Output: [ Dog {}, Dog {} ]
console.log(filterDogs(animals2)); // Output: []



