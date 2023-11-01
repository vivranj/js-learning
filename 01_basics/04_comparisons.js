console.log(2>3);
console.log(2>=3);
console.log(2<3);
console.log(2<=3);
console.log(2==3);
console.log(2!=3);

console.log("2" >1);
console.log("02" > 1);

console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);

//the reason is that an equality check == and comparison > < >= <= work differently
//comparison converts null to a number treating as 0
// thats why null >=0 is true and null > 0 false

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

//===
console.log("2"===2);
console.log("2"==2);