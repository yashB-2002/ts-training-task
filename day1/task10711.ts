// Function that will take first parameter a object and second one a object with new properties name to be updated. 
// When it typing the second argument it should give suggestion.

// <pre><code class="javascript">
// const user = {
//     firstName: "Tony";
//     lastName: "Stark";
//     age: 54;
// }

// const transformUser = transformKeys(user, { firstName: 'first', lastName: 'last' })
// </code></pre>


// Should give return type as
// <pre><code class="javascript">
// {
//     first: string;
//     last: string;
//     age: number;
// }
// </code></pre>


// interface for defining user type
interface User {
    firstName:string,
    lastName:string,
    age:number
}



// method to update user with new properties

type updateType = (user:User, updatedUser:Partial<User>) => User


// main function to update the values
const updateUser:updateType = (user:User, updatedUser:Partial<User>) => {
    return {...user,...updatedUser}
}

const userDemo:User = {
    firstName:'y',
    lastName:'b',
    age:22
}
// example 
console.log(updateUser(userDemo, {firstName:'yash',lastName:'bhardwaj'}))
//output 

// befor - {firstName:'y', lastName:'b', age:22}

// after{firstName: 'yash', lastName: 'bhardwaj', age: 22}