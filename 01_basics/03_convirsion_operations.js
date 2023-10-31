let score="30" //1."30abc" ->  from line 8 ) typeof number -> NaN 2. null -> typeof number -> 0 3. undefined -> typeof number -> Nan

// 4 true -> typeof number -> 1  5. "Hitesh" -> typeof number -> NaN

console.log(typeof score)
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber);

// "33" => 33
// "33ab" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1; // "" -> false , "hellow" -> true

let booleanIsLoggedIn= Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

//1 -> true
//0 -> false
// "" -> false
//"vivek" -> true

let someNumber=33
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//--------*******Operations*********---------------

let value=3
let negValue=-value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hey";
let str2=" viv";
let str3=str1 + str2;
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1+2+"2");

console.log((3+4) *5 %3);
console.log(+true);
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100;
gameCounter++;
++gameCounter;
console.log(gameCounter);

//learn prefix and postfix in js

//tc39.es/ecma262