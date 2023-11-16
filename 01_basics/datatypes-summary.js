// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score =100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail

const id=Symbol('123')
const anotherId=('123')

console.log(id===anotherId);

const bigNumber=43567890432456773n  //bigInt

// Reference (Non primitive)

//Array, Objects, Functions

const heros= ["shaktiman", "naagraj", "doga"]; //arrays

let myObj={   //Object
    name: "swati",
    age: 22,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction);   // object function


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) ,Heap (Non-Primitive)

let myName= "swati"
let anothername=myName
anothername="choubey"
console.log(myName);
console.log(anothername);

let userOne={
    email:"userone@google.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email="swati@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);