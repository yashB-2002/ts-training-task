let mytuple:[string,number,boolean] = ['hello',23,true]

let mixed = ['hello',43,false]

mixed = mytuple // it is correct because mytuple consists same type elements

// mytuple[3] = 'bro' //! can not assgin more elements to specified size tuple

// mytuple = mixed //! vice versa is not true although they have same type elements but there mught be case mixed can consist fewer elements then myuple which is 3

let array = [] // it is of any type 


// objects

type objType = {
    prop1:string,
    prop2:number| string,
    prop3?:boolean
}
const obj1:objType = {
    prop1:"yash",
    prop2:'22'
}

 // obj1.prop2 = 21 -> error
//  obj1.prop3 -> can't be added 





//! Type Aliases 

type One = string;
type Two = number | string;
type Three = 'hello'

// convert to more or less specific
let a: One = 'helloooo'
let n=1;
let b = a as Two // less specific type
let c = n as unknown as Three // more specific

console.log(typeof c)

let e = <string|number>'world'

const sum = (a:number, b:number, c:'add'|'concat') : number | string =>{
    if(c === 'add') return a+b
    return ''+a+b
}
//let myVal:number = sum(2,2,'add') //! here ts will give error because return type can be anything but we are restricting it only as a number
let myVal:number = sum(2,2,'add') as number

//! We have to be carefull as ts sees no problem here but add func result in number 
let myVal2:string = sum(2,2,'add') as string

//!doube casting

// 10 as string -> error
(10 as unknown) as string


//! DOM selectors

// const img = document.querySelector('img') as HTMLImageElement
// img.src = '1.jpg'

// const img2 = document.getElementById('#img')! //! img2 is nonNull
// const img3 = <HTMLCollectionOf<HTMLImageElement>>document.getElementsByTagName('img') //! will not work in .tsx file react
// console.log(img3.length)

// functions
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type user = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: 'Dave'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'

// functions 
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(2, 2))

// optional parameters 
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

// Rest Parameters 
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}


//! satisfies operator

// before 
const user1: Record<string, string | number | boolean> = {
    firstName: "John",
    lastName: "Doe",
    age: 5,
    isMember: true
};
console.log(user1.age) // age can be of any specified type ts can't resolve what value it got at compile time so to mitigate this issue satisfies operator is used
//after
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 5,
    isAdult:true
} satisfies Record<string, string | number | boolean>

console.log(user.age) // now ts is recognizing age as type number 


//! keyof operator

interface Student {
    //[key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
}

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})