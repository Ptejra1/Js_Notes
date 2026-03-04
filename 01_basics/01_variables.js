const accountID=1456;
let accountEmail="Pt@gmail.com";
var accountPassword="123";       // older way to declare variable
accountCity="Indore";      // variable type assigned based on value 
let accountState;       //undefined

// accountID=2  //Not allowed -> const cant be changed or updated 

accountEmail="pt2@gmail.com";
accountPassword="121";
accountCity="Bhopal";

/*
  Prefer not to use var 
  because of block scope and functional scope

*/

console.log(accountID);

console.table([accountID,accountEmail,accountPassword,accountCity]);  // another way to log multiple data in tabular form
console.log(accountState);