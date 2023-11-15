const accountId=144553
let accountEmail="swati@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2   // not allowed

//prefer not to use var because of issue in block scope and functional scope

accountEmail="S@gmail.com"
accountPassword="23141"
accountCity="Raipur"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])