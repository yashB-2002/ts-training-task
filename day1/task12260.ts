// * Use of satisfies 
// * Use of as

// Showcase the proper working example

//! satisfies operator

// before 
const user11: Record<string, string | number | boolean> = {
    firstName: "John",
    lastName: "Doe",
    age: 5,
    isMember: true
};
console.log(user11.age) // age can be of any specified type ts can't resolve what value it got at compile time so to mitigate this issue satisfies operator is used
//after
const user2 = {
    firstName: "John",
    lastName: "Doe",
    age: 5,
    isAdult:true
} satisfies Record<string, string | number | boolean>

console.log(user2.age) // now ts is recognizing age as type number 


//! as keyword

const summ = (a:number, b:number, c:'add'|'concat') : number | string =>{
    if(c === 'add') return a+b
    return ''+a+b
}

let myVall:number = summ(2,2,'add') as number

let myVall1:string = summ(2,2,'add') as string