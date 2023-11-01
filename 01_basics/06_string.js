const name="vivek"
const repo=45

console.log(name + repo +" ranjan");

console.log(`my name is ${name} and my repo count is ${repo}`);

const gamename=new String("Countra");

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(3));
console.log(gamename.indexOf('r'));

const newStr=gamename.substring(0,5);
console.log(newStr);

const anotherStr=gamename.slice(-1, 1);
console.log(anotherStr);

const str1="  vivek   "
console.log(str1);
console.log(str1.trim());

const url="vivek%45ranjan.com";
console.log(url.replace("%45","-"));

console.log(url.includes("viv"));

console.log(url.split("a"));