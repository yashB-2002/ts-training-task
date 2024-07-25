// Define an interface Person with properties name (string) and age (number). Then, create a function that takes a Person object and 
// returns a string in the format: "Name: <name>, Age: <age>".

// Complete describePerson Function :

// console.log(describePerson({ name: 'Alice', age: 30 })); 

// Expected Output: "Name: Alice, Age: 30"


interface Person {
    Name:string,
    Age:number|string
}

const describePerson = (obj:Person):string => {
    return `Name: ${obj.Name}, Age: ${obj.Age}`
}

console.log(describePerson({ Name: 'Alice', Age: 30 }))