"STRICT";

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Programer";
// let myCurrentJob = "Teacher"
// myFirstJob = "Coder"

// console.log(myFirstJob);

// const country = "USA";
// const continent = "North America"
// let population = 50
// console.log(country);
// console.log(continent);
// console.log(population)

// let isIsland = false;
// let language = "English"

// let javascriptIsFun = true;

// javascriptIsFun = "YES!"
// console.log(javascriptIsFun)
// console.log(typeof isIsland);
// console.log(typeof continent);
// console.log(typeof language);

// console.log(population / 2)

// population++;
// console.log(population);
// console.log(population > 60);
// console.log(population < 30);

// const description1 =
//     country +
//     " is in " +
//     continent +
//     ", and its " +
//     population +
//     " million people speak " +
//     language;
// console.log(description1)

// const now = 2037
// const ageJonas = now - 1991
// const ageSarah = now - 2020
// console.log(ageJonas, ageSarah)

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName2 = "Jonas";
// const lastName2 = "Schmedtmann";
// console.log(firstName2 + " " + lastName2)

/*
// SUBJECT Assignment operators
let x = 10 + 5;
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++
x--
x--
console.log(x)

//SUBJECT Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullage = ageSarah >= 18;

console.log(now - 1991 > now - 2018)

*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = "programer"
job = "teacher"

lastName = "Velez"
console.log(lastName)

*/
/*
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2020
console.log(ageJonas, ageSarah)

let x, y;
x = y = 25 - 10 -5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

// CHALLENGE #1
// Mark and John are trying to compare their BMI(Body Mass Index),
// which is calculated using the formula: BMI = mass / (height * height)(mass in kg and height in meters).

// Your task is to write some code to help them:
// Store Mark's and John's mass and height in variables called
// massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables
// called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether
// Mark has a higher BMI than John.Log it to the console too

// TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

//PRACTICE
// const massMark = Math.random() * 200;
// const heightMark = 1.69;
// const massJohn = Math.random() * 200;
// const heightJohn = 1.95;

// const BMIMark = Math.floor(massMark / (heightMark ** 2))
// const BMIJohn = Math.floor(massJohn / (heightJohn ** 2))

// const markHigherBMI = BMIMark < BMIJohn;

// console.log(markHigherBMI)
// console.log(`This is a random BMI calculator.`, "Mark's BMI =", BMIMark, "John's BMI =", BMIJohn)
// const markJohnBmi = `${BMIMark > BMIJohn ? "Mark's" : "John's"} BMI is higher than ${BMIMark > BMIJohn ? "John's" : "Mark's"}.`
// console.log(markJohnBmi)

// IMPORTANT: The ** operator is not supported in this editor.
// Please make sure to use exactly this formula
// mass / (height * height), and not this one mass / (height ** 2).

// const firstName = "Juan";
// const job = "Warehouse Associate";
// const birthYear = 1985;
// const year = 2024

// const juan = "I'm " + firstName + ", a " + (year - birthYear) + " years old "
//     + job + "!";
// console.log(juan)

// const juanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(juanNew)

// console.log(`Just a regular string...`)

// console.log('String with \n\
//     multiple \n\
//     lines');

// console.log(`String
//     multiple
//     lines`)

// const age = 15

// if(age >= 18) {
//     console.log('Sarah can start to drive 🤪🚗')
// } else {
//     const yearsLeft = 18 - 15;
//     console.log(`Sara is too young to drive. Wait another ${yearsLeft} years.😭`)
// }
// //control structure
// if(){
// }else{
// }

// const birthYear = 1991;

// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

//PRACTICE
// const birthYear = Math.floor(Math.random() * 2099);
// let century;

// if (birthYear > 1 && birthYear <= 100) {
//   century = "You were born in the 1st century.";
// } else if (birthYear > 100 && birthYear <= 200) {
//   century = "You were born in the 2nd century.";
// } else if (birthYear > 200 && birthYear <= 300) {
//   century = "You were born in the 3rd century.";
// } else if (birthYear > 300 && birthYear <= 400) {
//   century = "You were born in the 4th century.";
// } else if (birthYear > 400 && birthYear <= 500) {
//   century = "You were born in the 5th century.";
// } else if (birthYear > 500 && birthYear <= 600) {
//   century = "You were born in the 6th century.";
// } else if (birthYear > 600 && birthYear <= 700) {
//   century = "You were born in the 7th century.";
// } else if (birthYear > 700 && birthYear <= 800) {
//   century = "You were born in the 8th century.";
// } else if (birthYear > 800 && birthYear <= 900) {
//   century = "You were born in the 9th century.";
// } else if (birthYear > 900 && birthYear <= 1000) {
//   century = "You were born in the 10th century.";
// } else if (birthYear > 1000 && birthYear <= 1100) {
//   century = "You were born in the 11th century.";
// } else if (birthYear > 1100 && birthYear <= 1200) {
//   century = "You were born in the 12th century.";
// } else if (birthYear > 1200 && birthYear <= 1300) {
//   century = "You were born in the 13th century.";
// } else if (birthYear > 1300 && birthYear <= 1400) {
//   century = "You were born in the 14th century.";
// } else if (birthYear > 1400 && birthYear <= 1500) {
//   century = "You were born in the 15th century.";
// } else if (birthYear > 1500 && birthYear <= 1600) {
//   century = "You were born in the 16th century.";
// } else if (birthYear > 1600 && birthYear <= 1700) {
//   century = "You were born in the 17th century.";
// } else if (birthYear > 1700 && birthYear <= 1800) {
//   century = "You were born in the 18th century.";
// } else if (birthYear > 1800 && birthYear <= 1900) {
//   century = "You were born in the 19th century.";
// } else if (birthYear > 1900 && birthYear <= 2000) {
//   century = "You were born in the 20th century.";
// } else if (birthYear > 2000 && birthYear <= 2100) {
//   century = "You were born in the 21st century.";
// }
// console.log(century,"Year", birthYear);

//PRACTICE
// const age = Math.floor(Math.random() * 100)
// const retirementAge = 65
// const yearsLeft = retirementAge - age;
// const savings = Math.floor(Math.random() * 10000000)
// if(age >= 65 && savings >= 100000) {
//     console.log(`Great, now you can retire with ${savings} dollars in savings!`)
// } else if (age >= 65 && savings <= 99999) {
//     console.log(`Sorry buster, you only have ${savings} ${savings <= 1 ? "dollar" : "dollars"} in savings. You can't retire yet!`)
// } else {
//     console.log(`You're only ${age} year old. You'll have to wait ${yearsLeft} more ${yearsLeft <= 1 ? "year" : "years"} to retire.😭`)
// }

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
// 1. Print a nice output to the console, telling the user who has the higher BMI.
// The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or
// "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

//PRACTICE;
// const markWeight = Math.floor(Math.random() * 200);
// const markHeight = 1;
// const johnWeight = Math.floor(Math.random() * 200);
// const johnHeight = 1.92;
// const BMIMark = Math.floor(markWeight / markHeight ** 2);
// const BMIJohn = Math.floor(johnWeight / johnHeight ** 2);
// let BMIWinner;

// if (BMIMark > BMIJohn) {
//   BMIWinner = `Mark has a higher BMI ${BMIMark} than John's BMI ${BMIJohn}.`;
// } else if (BMIJohn > BMIMark) {
//   BMIWinner = `John has a higher BMI ${BMIJohn} than Mark's BMI ${BMIMark}.`;
// } else {
//   BMIWinner = `Both John's BMI ${BMIJohn} and Mark's BMI ${BMIMark} are the same.`;
// }
// console.log(BMIWinner);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

//SUBJECT Type Conversion // when we manually convert from one type to another.
// const inputYear = "1991";
// IMPORTANT // Use the function Number before the string to convert to a number.
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("Jonas"))
// console.log(typeof NaN)

//PRACTICE

// let calculation = '22' + "22" - 2220 + "3990" / 1
// console.log(typeof calculation)
// console.log(Number(calculation))
// console.log(typeof calculation)

// let n = "11"
// let m = "2"
// let number = n - m
// console.log(typeof number)

//IMPORTANT You can also convert a number to a string using the String function.
// console.log(String(23), 23)

//SUBJECT Type Coersion // Happens whenever an opperator is dealing with 2 values
//that has two different types.
// console.log('I am ' + 23 + ' years old')
// because Javascript has automatic type coersion behind the scenes
//this is what it would look like
// console.log('I am ' + '23' + ' years old')

//IMPORTANT When using the (-, *, /) operator the number will be converted to a number
//IMPORTANT When using the + operator the string will be converted to a number and the strings are concatinated

// console.log("23" - "10" - 3) //=>10
// console.log("23" + "10" + 3)
// console.log("23" * "2")
// console.log("23" / "2")

// let n = "1" + 1; //  string "1" + 1 will concatinate and make "11"
// n = n - 1; // n = "11" - 1 = 10 because the - operator converts the string to a number
// console.log(n) //10

// 2 + 3 + 4 + "5" = "95"
// "10" - "4" - "3" - 2 + "5" = "15"

//SUBJECT Truthy Falsy
// IMPORTANT 5 falsy values: 0, '', undefined, null NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jones"));
// console.log(Boolean({}));
// console.log(Boolean(NaN));

// SUBJECT　Conversion to Booleans of Falsy

// const money = 0; // computer see 0 as false.  If 1 > more it will be true
// if(money) {
//     console.log("Don't spend it all!")
// } else {
//     console.log('You should get a job!')
// }

// let height ;
// if(height >= 0) {
//     console.log('Yay! Height is defined')
// } else {
//     console.log('Height is UNDEFINED')
// }

// SUBJECT Comparison Operators === VS == Equality opperators
// IMPORTANT == does type coersion "18" == 18 = true
//IMPORTANT === does not do type coersion "18" === 18 = false
// const age = Number("18");
// if (age === 18) console.log('You just became an adult (strict)')

// if (age == 18) console.log('You just became an adult (loose)')

// in order for us to get an output of a number we need to
// put the Number converter in front of the prompt, then wrap it.
// If we don't do that it will return a string
// We need to do that when using the strict === operator

//SUBJECT Using the prompt and alert function in my code
//IMPORTANT when using it in this way the number will be a string, we use the Number function to convert it to a number by wrapping it.

// const favourite = Number(prompt("What's your favorite number?"))
// console.log(favourite)
// console.log(typeof favourite);
// if (favourite === 23) {
//     console.log(prompt('Cool! 23 is an awsome number'))
// } else if (favourite === 7) {
//     console.log(alert('7 is also also a cool number!'))
//     console.log(alert('7 is also also a cool number!'))
// } else if (favourite === 9) {
//     console.log(prompt('9 is also also a cool number!'))
// } else {
//     console.log(prompt('That is not the magic number!'))
// }

//IMPORTANT The different operator  NOTE !== = not equal
// if(favourite !== 23) console.log(alert("Why not 23?"))

//SUBJECT Basic Boolean Logic
//SUBJECT BASIC Logical Operators
//IMPORTANTand operator && all have to be true
//IMPORTANTor operator || at least one has to be true. can only be false if all are false.
//IMPORTANTnot operator ! converts true to false and false to true

//SUBJECT How logical operators work using BASIC Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive...")
// } else {
//     console.log("Someone else should drive")
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive...")
// } else {
//     console.log("Someone else should drive...")
// }

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas.They compete against each other 3 times.
// The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data included below.
// The average score for Dolphins should be assigned to the scoreDolphins variable,
// and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition,
// and print to the console:

// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
//PRACTICE
// const scoreDolphins = Math.floor(Math.random((96 + 108 + 89) / 3) * 200);
// const scoreKoalas = Math.floor(Math.random((88 + 90 + 110) / 3) * 200);
// //console.log(scoreDolphins, scoreKoalas);
// let winStatement;
// if (scoreDolphins > scoreKoalas) {
//     winStatement = `Dolphins win the trophy 🐬(${scoreDolphins}) vs. 🐨(${scoreKoalas}).`
// } else if (scoreDolphins < scoreKoalas) {
//     winStatement = `Koalas win the trophy 🐨(${scoreKoalas}) vs. 🐬(${scoreDolphins}).`
// } else {
//     winStatement = `Both win the trophy 🐨(${scoreKoalas}) vs. 🐬(${scoreDolphins})`
// }
// console.log(winStatement)

//PRACTICE Coin Flip- Heads of Tails (made by me!)
// const coin = Math.floor(Math.random() * 1000);
// let coinFlip;

// if (coin % 2 === 0) {
//   coinFlip = `🪙 Heads`;
// } else if (coin % 2 !== 0) {
//   coinFlip = `🪙 Tails`;
// } else {
//   coinFlip = "Flip again!";
// }
// console.log(coinFlip);

//PRACTICE
// const scoreDolphins = (96+ 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy🏆")
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy🏆");
// } else if (scoreKoalas === scoreDolphins) {
//     console.log("Both win the trophy🙌🏼");
// } else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100) {
//     console.log("Both teams wins their own trophy");
// } else {
//     console.log("No team wins the trophy😭")
// }

//SUBJECT Using a switch statement with logical operators
//IMPORTANT Used when we want to compare on value to multiple different options
// we have a weekday variable and for each day there is a different activity

//PRACTICE  Stock Price Check (made by me!)
// const checkPrice = "bracket";
// const cameraPrice = "$299.99"
// const irSecurityCamPrice = "$149.99"
// const bracketPrice = "$4.99"
// const securityCameraPackagePrice = "$499.99"
// const irCamera4mmPrice = "$74.99"
// switch (checkPrice) {
//     case "camera":
//         console.log(`The price of this ${checkPrice} is ${cameraPrice}`);
//         break;
//     case "irSecurityCam":
//         console.log(`The price of this ${checkPrice} is ${irSecurityCamPrice}`)
//         break;
//     case "bracket":
//         console.log(`The price of this ${checkPrice} is ${bracketPrice}`)
//         break;
//     case "securityCameraPackage":
//         console.log(`The price of this ${checkPrice} is ${securityCameraPackagePrice}`)
//         break;
//     case "irCamera4mm":
//         console.log(`The price of this ${checkPrice} is ${irCamera4mmPrice}`);
//         break;
//     default:
//         console.log(`Sorry, we do not carry ${stock}s`)
// }

//PRACTICE
// const billToCCTV = "Pack items";
// switch (billToCCTV) {
//     case "pick 1 item":
//         console.log("Bill CCTV $3.00");
//         break;
//     case "Open 1 CTN":
//         console.log("Bill CCTV $2.00");
//         break;
//     case "Pack items":
//         console.log("Bill CCTV $4.00")
//         break;
//     default:
//         console.log(`More data input needed for ${billToCCTV}`)
// }

// const day = "monday";  // this is how we access the switch statement values
// switch (day) {
//     case "monday":  // day === "monday"
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day!")
// }

//IMPORTANT Switch statements use strict ===
// const schedule = ("tuesday")  // this is how we access the switch statement values
// switch (schedule) {
//     case "monday":
//         console.log("Go to work")
//         console.log("After work, go to the gym")
//         break;
//     case "tuesday":
//         console.log("Write some code");
//         console.log("Read a book");
//         break;
//     case "wednesday":
//         console.log("Do nothing");
//     case "thursday":
//         console.log("Cook dinner for family");
//         break;
//     case "friday":
//         console.log("Have dinner with friends");
//         break;
//     case "saturday":
//         console.log("Go on a road trip");
//         break;
//     case "sunday":
//         console.log("Go to church");
//         break;
//     default:
//         console.log("Use one day of the week")
// }

//CHALLENGE Write a function using this logic

// function schedule(day) {
//   if (day === "monday") {
//     console.log("Go to work");
//     console.log("After work, go to the gym");
//   } else if (day === "tuesday") {
//     console.log("Write some code");
//     console.log("Read a book");
//   } else if (day === "wednesday") {
//     console.log("Do nothing");
//   } else if (day === "thursday") {
//     console.log("Cook dinner for family");
//   } else if (day === "friday") {
//     console.log("Have dinner with friends");
//   } else if (day === "saturday") {
//     console.log("Go on a road trip");
//   } else if (day === "sunday") {
//     console.log("Go to church");
//   } else {
//       console.log("Use one day of the week");
//   }
//   return `Your schedule for ${day}:`;
// }
// schedule("tuesday");
// console.log(schedule("sunday"))

/* BUGIMPORTANT The function doesn't have a return statement. 
In JavaScript, if a function doesn't explicitly return a value, 
it implicitly returns undefined.
Solution:
To fix this, you can add a return statement to the function,
 and you can use the day parameter in the return string or return day
*/

//CHALLENGE  Write this switch statement, but as an if else statement using the same logic.

// const day = ("tuesday")
// if (day === "monday") {
//     console.log("Go to work");
//     console.log("After work, go to the gym");
//   } else if (day === "tuesday") {
//     console.log("Write some code");
//     console.log("Read a book");
//   } else if (day === "wednesday") {
//     console.log("Do nothing");
//   } else if (day === "thursday") {
//     console.log("Cook dinner for family");
//   } else if (day === "friday") {
//     console.log("Have dinner with friends");
//   } else if (day === "saturday") {
//     console.log("Go on a road trip");
//   } else if (day === "sunday") {
//     console.log("Go to church");
//   } else {
//     console.log("Use one day of the week");
//   }

//CHALLENGE using the switch logic write an if else statement

// let day = "tuesday"
// if (day === "monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup🧑🏻‍💻");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos🕵🏻‍♂️");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples✍🏼");
// } else if (day === "friday") {
//     console.log("Record videos🎥");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend😎");
// } else {
//     console.log("Not a valid day!😢")
// }

// IMPORTANT  SUBJECT The difference between statements(declorations) and expressions
// NOTE an expression is a piece of code that produces a value
// NOTE a statement is a bigger piece of code which does not produce a value
//
// EXAMPLE of expressions
// 3 + 4
// 1991
// true && false

// EXAMPLE of statements
// if (23 > 10) {
//      const str = "23 is bigger"; //This string is an expression // this whole line of code is a statement
// }

//SUBJECT TERNARY OPERATOR (conditional operator)
//IMPORTANT Because the ternary operator is an expression we can use it in a template literal
// Ternary operator:  condition  ?   executes if true : executes if false

// const age = 18;
// age >= 18
//   ? console.log("I like to drink wine🍷")
//   : console.log("I like to drink water💦");

// const drink = age >= 18 ? "wine🍷" : "water💦";
// console.log(drink);

// //NOTE EXAMPLE Using an if statement to write the same thing (COMPARISON)
// let drink2;
// if (age >= 18) {
//   drink2 = "wine🍷";
// } else {
//   drink2 = "water💦";
// }
// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? "wine🍷" : "water💦"}`);

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant.
// In his country, it's usual to tip 15% if the bill value is between 50 and 300.
// If the value is different, the tip is 20 %.

// Your tasks:
// Calculate the tip, depending on the bill value.Create a variable called tip for this.
// It's not allowed to use an if...else statement (if it's easier for you,
// you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip,
// and the final value(bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string.
// Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

//PRACTICE
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const bill = Math.floor(Math.random() * 400);
// const tip = Math.ceil(calcTip(bill));
// const total = bill + tip;
// let billStatment;
// if (bill > 0 && bill <= 100) {
//     billStatment = `Not bad, your total is ${total} the bill is ${bill}, and the tip is ${tip}.`
// } else if (bill > 100 && bill <= 200) {
//     billStatment = `What did you eat? Your total is ${total} the bill is ${bill}, and the tip is ${tip}.`
// } else if (bill > 200 && bill <= 300) {
//     billStatment = `You're going to need another job! Your total is ${total} the bill is ${bill}, and the tip is ${tip}`
// } else {
//     billStatment = `You dont have enough to pay the ${total} bill, you'll need to wash dishes.`
// }
// console.log(billStatment);

//PRACTICE
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const total = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

//PRACTICE
// Make a tip calculator if the bill is more than 50 but less than 300 the
// tip will be 15% if other amount tip should be 20%.

// const bill = 275
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`)
// alert("Success!")
