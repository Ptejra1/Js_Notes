// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  //true
// console.log("02" > 1); //true  -> js automatically converts them to number and then  compare

console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===   //strict check -> check value as well as data type 

console.log("2" === 2);  //false