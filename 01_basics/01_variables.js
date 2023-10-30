// variables - create memory

const accountId=123455
let accountEmail="vvkbblu3012@gmail.com"
var accountPassword="234556"
accountCity="jaipur"

let accountState; //we can use semicolon or not it depends on us -> undefined(o/p)

//changing variable

// accountId=3455 //not allowed
console.log(accountId);

accountEmail="vr@vr.com"
accountPassword="rfsdg"
accountCity="bangaluru"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


/*
summary

const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/
