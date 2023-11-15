let score="33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let num=null
let value=Number(num);
console.log(typeof num)
console.log(typeof value)
console.log(value)

// "33" => 33
// "33abc" => NaN(value of variable)
// true => 1; false => 0

let isLoggedIn=1
let booleanisLoggedIn=Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

//1 => true; 0 => false
// "" = false
// "swati" =true

let someNumber= 33
let stringNumber=String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)