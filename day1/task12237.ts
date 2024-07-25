// Define an enum Direction with values Up, Down, Left, and Right. Then, create a function that takes a Direction value and 
// returns a string representing the direction.

// Complete Below Method

// console.log(getDirection(Direction.Up)); // Output: "Up"


//! enum with string values
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

//! fn definition
const getDirection = (value:Direction): string => {
    return value
}

//! fn calling
console.log(getDirection(Direction.Up));
console.log(typeof getDirection(Direction.Up));



