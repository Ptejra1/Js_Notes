// for conversion to any other data type use first letter capital of that data type
let score = "ptejra"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

///Type of data after converting to integer
//  data  log after conversion to number
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "ptejra"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "ptejra" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);  "33"
// console.log(typeof stringNumber);  string

//*****************Operations ******************************

let value = 3;
let negValue=-value;
// console.log(negValue);   -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="Parmanand";
let str2=" tejra";
let str3=str1 + str2;
// console.log(str3);   //Parmanand tejra

// console.log("1" + 2);   //12
// console.log(1 + "2");   //12
// console.log("1" + 2 + 2);  //122  -> If string is first then conversion done in string
// console.log(1 + 2 + "2");  //32   -> If stirng is last then previous conversion is done first and then on string
                                     /// All this conversion based on rules/standards of Ecma script


// console.log(true);  //true
// console.log(+true);  //1
// // console.log(true+);  //Error
// console.log(+"");      //0       

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); ///101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion