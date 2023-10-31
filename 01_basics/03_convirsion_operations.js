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