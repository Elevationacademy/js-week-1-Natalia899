//exercise1
const maxCapacity = 14;
let surfTime = true;
let bestStudent;
//const purposeInLife;
console.log(maxCapacity);

console.log(maxCapacity);
console.log(surfTime);
console.log(bestStudent);
//console.log(purposeInLife); 

//exercise2
const hobby = "Diving";
const result = hobby + "is the best thing ever";
console.log(result); 
console.log(hobby+"is the best thing ever");

//exercise3
const password = "abc";
const confirmPassword = "abc";
console.log(password==confirmPassword);

//exercise4
console.log(423*12);

const a = 802;
const b = 2;
console.log(a/b); //another way to do calculation

console.log((5+6)*3);

//exercise5
console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log("")
console.log((31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log(52 !== "52")
console.log(undefined || null);

//exercise6
/* a=0
   b=0
   c=2
*/

/* Conditional statements

exercise 1
*/
let numChildren = prompt("How many children do you have?");
let isCareful = true;
 if (isCareful = false) {
     numChildren--
 }
 console.log(numChildren);

 //exercise2
 const silverwareCount = 79;
  if (silverwareCount % 2 !==0) {
      console.log("There is something missing")
  };

   //exercise3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance) {
    salary+=goodBonus
}
console.log(salary)

//exercise4
const isVIP = false
let cash = 500

if (isVIP || cash > 300) 
{ console.log("Welcome to the club!") } else {
    console.log("Get out of here!!!")
};

//exercise5


//exercise6
const gender = null
let profession = "business"


if (gender == "male" ) {
    console.log(profession + "man")
} else if (gender == "female") {
    console.log(profession + "women")
} else {
    console.log(profession + "person")
}

//exercise 7

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen && (currentYear - yearOfTeslaPurchase >= 4)) {
    console.log("do you want the upgrade?") }
 else if (boughtTesla && isUSCitizen && (currentYear - yearOfTeslaPurchase <= 4)) {
     console.log("Are you satisfied with the car?")
 } else if (boughtTesla && !isUSCitizen) {
     console.log("Do you want to move to the USA?")
 } else if (!boughtTesla) {
     console.log("Are you interesting to buy a Tesla?")
 }
 console.log('');