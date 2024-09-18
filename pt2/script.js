"use strict";

//                             SUBJECT FUNCTIONS
/*IMPORTANT FUNCTION EXPRESSIONS  (do not have names and are stored in variables)
 Syntax:  
 NOTE the first 2 are arrow functions (do not need to return anything)
const myFunction = (a, b) => a * b;
const numberSum = (a, b, c) => (a + b + c) / 3;

 let geeksforGeeks = function(paramA, paramB) { 
  // Set of statements
  //}

EXAMPLE
let geeksforGeeks = function (paramA, paramB) {
    return paramA + paramB;
//}
let result = geeksforGeeks(5, 5);
console.log("Sum: ",result);
*/
/*IMPORTANT FUNCTION STATEMENT/FUNCTION DECLORATION (can be hoisted)
 Syntax: 
 function geeksforGeeks(paramA, paramB) {
    // Set of statements
//}
EXAMPLE
function geeksforGeeks(paramA, paramB) {
  return paramA + paramB;
//}

let result = geeksforGeeks(5, 5);
console.log('Sum =', result);
*/

//SUBJECT Functions declorations
//NOTE A function is a piece of code that we can reuse in our code
//NOTE A function like the one below is only used when we want to execute a block of code over and over again.
// This type of function will not return a value only log to the console
// function logger() {
//     console.log("My name is Juan");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

//PRACTICE
//const statement = "123214342323423"
// function funStatement() {
//     console.log("¥¥¥ This is just a test ¥¥¥");
//     console.log("How many of these can I put in here?")
//     console.log(`Can I use this number? ${statement}`);
//     console.log("I absolutely can!");
//     console.log(`おれの名前はワンヴェレズです。`)
//     console.log(`よろしくお願いします！`)
// }
// funStatement()

// NOTE a function can receive and send data back

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// //NOTE The returned value "juice" from running this function is stored in fruitProcessor(5, 0)
// fruitProcessor(5, 0);
// //IMPORTANT if we want to use the returned value we need to store it in a variable.
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// ///NOTE we can directly log it to the console
// console.log(fruitProcessor(5, 0)); // we did not caputure the value in a variable

// //IMPORTANT we can reuse the function with different input values
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(`Here is your`,appleOrangeJuice, `I hope you like it.`)
// //IMPORTANT We need to call the function in order for it to run

//PRACTICE FUNCTION EXPRESSION
// const fruitCounter = function (apples, oranges) {
//   const mixedJuice = `You have ${apples} apples and ${oranges} oranges.`
//   return mixedJuice;
// }
// const counter = fruitCounter(2, 3)
// console.log(counter);
// console.log(fruitCounter(23, 23))

// PRACTICE FUNCTION EXPRESSION
// const addition = function (num1, num2) {
//   const sum = num1 + num2
//   return sum
// }
// console.log(addition(2, 3));

//PRACTICE FUNCTION STATEMENT/FUNCTION DECLORATION
// let sum;
// function additionSubtraction(num3, num4) {
//   if (num3 >= num4 ? sum = num3 - num4 : sum = num3 + num4) {
//   }
//   return sum
// }
// console.log(additionSubtraction(10, 5))
// let funMath = additionSubtraction(20, 10)
// console.log(funMath)
// console.log(additionSubtraction(40, 21))

//PRACTICE FUNCTION STATEMENT/FUNCTION DECLORATION
// function averageScore(num1, num2, num3) {
//   const scores = (num1 + num2 + num3) / 3;
//   return scores;
// }
// console.log(averageScore(50, 30, 20));

//PRACTICE FUNCTION EXPRESSION
// const averageNumber = function (a, b, c) {
//   const sumOfAll = (a + b + c) / 3;
//   return sumOfAll;
// };
// console.log(averageNumber(2, 3, 4));

//PRACTICE FUNCTION EXPRESSION/ARROW FUNCTION
// const numberSum = (num1, num2, num3) => (num1 + num2 + num3) / 3;
// console.log(numberSum(2, 3, 5));
// const avrgPenguins = numberSum(30, 40, 50);
// const avrgHawks = numberSum(60, 70, 80);
// console.log(avrgPenguins, avrgHawks);

//PRACTICE FUNCTION EXPRESSION/ARROW FUNCTION
// const multiplyNum = (num1, num2) => num1 * num2;
// console.log(multiplyNum(25, 4));

//PRACTICE FUNCTION EXPRESSION/ARROW FUNCTION
// const oddOrEven = (num) =>
//   num % 2 === 0 ? `This is an even number` : `This is an odd number`;
// console.log(oddOrEven(39485));

//PRACTICE FUNCTION EXPRESSION/ARROW FUNCTION
// const BMICalc = (weight, height) => weight / height ** height;
// const BMIJohn = BMICalc(70, 1.7);
// console.log(BMIJohn);
// console.log(BMICalc(80, 2));

//PRACTICE FUNCTION EXPRESSION/ARROW FUNCTION
//const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//PRACTICE FUNCTION STATEMENT/FUNCTION DECLORATION
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and
//     ${oranges} oranges.`;
//     return juice;
// }
// //fruitProcessor(5, 0); // NOTE if we want to use the value that was returned (juice) we need to store it in a variable
// const appleJuice = fruitProcessor(5,0); //NOTE we need to save the fruitProcessor(5, 0) into to applejuice variable then log it to the console
// console.log(appleJuice)
// console.log(fruitProcessor(5, 0)); // We can access the function directly without capturing the value.
// IMPORTANT We can reuse the funtion with different inputs values and get a different output
// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

//PRACTICE
// function juiceBlender (cherries, peaches) {
//   const juice = `Here is the juice you ordered with ${cherries} cherries and ${peaches} peaches. Enjoy!`
//   return (juice);
// }
// const mixedJuice = juiceBlender((5+1) * 2, 50 / 100)
// console.log(mixedJuice)

//SUBJECT
//NOTE Function decloration (we can call this function before it is defined)
// console.log(calcAge1(1985))

// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// calcAge1(1991);
// const age1 = calcAge1(1991); // save it to a variable
// console.log(age1); // Now we can call the function to to console

// //SUBJECT Function Expression also called an anonomous function since we call it without a name
// //NOTE Instead of writing a function with the calcAge name
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2); //Calling both caclAge1 and caclAge2 functions

//SUBJECT Arrow function IMPORTANT Cannot use (this) keyword with arrow functions
//NOTE a special form of function expression that is shorter to write
//NOTE we dont need curly braces or a return
//NOTE Great for 1 line functions

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// //IMPORTANT Use this kind of arrow function if we have more parameters or code
// //NOTE We need to return the value

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     //return retirement; // use this if we have a single parameter
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, "Juan"));
// console.log(yearsUntilRetirement(1980, "Bob"));

//SUBJECT Calling functions from other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

//EXAMPLE of functions
//IMPORTANT we are going to turn this arrow function into a more normal expression
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`
// }

//NOTE we made a function with the information from the arrow function
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// //NOTE this is the converted function
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years.`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🎉`);
//       return -1;
//     }
//   };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike")); //since it is returning a -2 we can use an if else statement to fix this problem

//PRACTICE
// const calcAge = function (birthYear) {
//   return currentYear - birthYear;
// };
// const currentYear = 2024

//NOTE this is the converted function
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years.`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🎉`);
//       return `Been enjoying retirement for ${age - 65} ${retirement === -1 ? "year" : "years"}`;
//     }
//   };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1957, "Mike"));

//PRACTICE
// const ageCalc = birthYear => currentYear - birthYear;
// const currentYear = 2024

// function yearsUntilRetirement(birthYear, name) {
//   const age = ageCalc(birthYear)
//   const retirement = 65 - age
//   if (retirement > 0) {
//     console.log(`${name} has ${retirement} years left before retiring.`)
//   } if (retirement < 0) {
//     console.log(`Congradulations ${name}`)
//   }
// return retirement
//   }
// console.log(yearsUntilRetirement(1985, "Juan"))

//PRACTICE
// const ageCal = birthYear => currentYear - birthYear;
// const currentYear = 2024

// function yearsUntilRetirement(birthYear, name) {
//   const age = ageCal(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${name} has ${retirement} years left`)
//   } else if (retirement < 0) {
//     console.log(`${name} has been retired for ${retirement <= -1 ? "a few years" : "a year"}`);
//   }
//   return retirement
// }
// console.log(yearsUntilRetirement(2020, "Jim"))

//PRACTICE
// function retirementCalc(age, name) {
//   const retirement = 65 - age
//   return `${name} will retire in ${retirement} years.`
// }
// console.log(retirementCalc(23, "Josh"));

//PRACTICE
// function retirementCalc(birthYear, name) {
//   const currentYear = 2024;
//   const age = currentYear - birthYear;
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${name} has ${retirement} ${retirement === 1 ? "year" : "years"} till retirement.`);
//   } else if (retirement <= 0) {
//     console.log(`${name} is already retired.`);
//   }
//   return `Retirement Calculator`
// }
// console.log(retirementCalc(1959, "Josh"))

//PRACTICE
// const ageCalc = (birthYear) => currentYear - birthYear;
// const currentYear = 2024;

// function yearsTillRetirement(birthYear, name) {
//   const age = ageCalc(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${name} has ${retirement} ${retirement === 1 ? "year" : "years"} to retire.`);
//   } else if (retirement <= 0) {
//     console.log(`Congradulations ${name} on your retirement.`);
//   }
//   return `Retirement Calculator`;
// }
// console.log(yearsTillRetirement(1972, "Josh"));
// console.log(yearsTillRetirement(1969, "Linda"));

//PRACTICE
// const scoreAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreBulls = scoreAverage(300, 800, 400);
// let scoreBears = scoreAverage(67, 55, 93);

// function betterAverage(bullsAverage, bearsAverage) {
//   if (bearsAverage > 2 * bullsAverage) {
//     console.log(`The Bears DESTROYED The Bulls 🏆`);
//   } else if (bullsAverage > 2 * bearsAverage) {
//     console.log(`The Bulls DESTROYED The Bears 🏆`);
//   } else if (bullsAverage > bearsAverage) {
//     console.log(
//       `🎯Bulls win! With an average score of ${bullsAverage} vs. 🐻${bearsAverage}`);
//   } else if (bearsAverage > bullsAverage) {
//     console.log(
//       `🐻Bears win! With an average score of ${bearsAverage} vs. 🎯${bullsAverage}`);
//   } else if (bearsAverage === bullsAverage) {
//     console.log(`TIED GAME!`);
//   }
//   return `3 Game Averages!`;
// }
// console.log(betterAverage(scoreBulls, scoreBears));

// CHALLENGE #1
//NOTElet num = 3.45345345.toFixed(2)  used to manipulate returned decimal points .toFixed(decimal point)
//console.log(num)

// Back to the two gymnastics teams, the Dolphins and the Koalas!
// There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated
// (so one average score per team).

// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// Your tasks:
// Create an arrow function calcAverage to calculate the average of 3 scores.
// This function should have three parameters and return a single number(the average score).

// Create a function checkWinner that takes the average score of each team as parameters
// (avgDolphins and avgKoalas), and then logs the winner to the console,
// together with the victory points, according to the rule above.
// Example: Koalas win(30 vs. 13)(use avgDolphins and avgKoalas instead of hard - coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

//PRACTICE
// const randomScoreDolphins = Math.floor(Math.random() * 300)
// const randomeScoreKoala = Math.floor(Math.random() * 300)

// function checkWinner(dolphinsScores, koalasScores) {
//   if (dolphinsScores > 2 * koalasScores) {
//     console.log(`🐬${dolphinsScores} 🐨${koalasScores}`);
//   } else if (koalasScores > 2 * dolphinsScores) {
//     console.log(`🐨${koalasScores} 🐬 ${dolphinsScores} `);
//   } else {
//     console.log(`No team wins 😢`);
//   }
//   return `GAME DAY RESULTS`
// }
// console.log(checkWinner(randomScoreDolphins, randomeScoreKoala));

//PRACTICE
// const calcAge = birthyear => birthyear - currentYear;

// const currentYear = 2024

// function yearsTillRetirement(birthYear, name) {
//   const age = currentYear - birthYear;
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${retirement} years left to retire ${name}`);
//   } else if (retirement <= 0) {
//      console.log(`Congradulations!🥳`);
//   }
//  return `Retirement Calculator`
// }

// console.log(yearsTillRetirement(1985, "John"));

//PRACTICE DOLPHINS vs. KOALAS winning team needs double the score of the other team to win
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(300, 34, 7);
// let scoreKoalas = calcAverage(24, 2, 40);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgDolphins}) vs. (${avgKoalas})`);
//   } else {
//     console.log("Nobody wins")
//   }
//   return `Great Game!`
// }
// console.log(checkWinner(scoreDolphins, scoreKoalas))

//PRACTICE
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//    dolphinAvrg =

// console.log(Math.floor(calcAverage(23, 23, 25)))
// }
// Create two new variables — scoreDolphins and scoreKoalas,
// and assign the value returned from the calcAverage function to them
// (you will need to call this function, and pass scores as arguments).
// const calcAverage = (score1, score2, score3) => {
//     const average = (score1 + score2 + score3) / 3
//     return average
// }
// scoreDolphins = calcAverage(44, 23, 71)
// scoreKoalas = calcAverage(65, 54, 49)

//PRACTICE
// const calcAverage = (score1, score2, score3) => {
//     const average = (score1 + score2 + score3) / 3;
//     return average;
//   };
//   let scoreDolphins = calcAverage(44, 23, 71);
//   let scoreKoalas = calcAverage(65, 54, 49);

//   const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins > avgKoalas * 2) {
//       console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas > avgDolphins * 2) {
//       console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//       console.log(`No team wins`);
//     }
//   };
//   checkWinner(scoreDolphins, scoreKoalas);
// // //Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas)

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline,
// which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated
// (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:
// Create an arrow function calcAverage to calculate the average of 3 scores.
// This function should have three parameters and return a single number (the average score).
// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage
// function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas),
// and then logs the winner to the console, together with the victory points, according to the rule above.
// Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27)

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins}🐬 vs. ${avgKoalas}🐨)`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas}🐨 vs. ${avgDolphins}🐬)`);
//     } else {
//         console.log(`No team wins😭`);
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(25, 300);
// checkWinner(25, 25);

// // test 2
// scoreDolphins = calcAverage(43, 23, 71);
// scoreKoalas = calcAverage(65, 54, 49);
// checkWinner(scoreDolphins, scoreKoalas);

// SUBJECT Arrays  (CAN BE MUTATED BUT NOT REPLACED)

// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";
// we can use arrays to store multiple values
// const friends = ["Micheal", "Steven", "Peter"];
//console.log(friends);
// different way of making an array
//const years = new Array(1991, 1984, 2008, 2020);

//NOTE We can access arrays with square brackets
// console.log(friends[0]);
// console.log(friends[2]);

// //NOTE This gives us the number of elements in the array with .length
// console.log(friends.length);

// //NOTE This method allows us to access the last element in the array
// const friends = ["John", "Ray", "Kelly", "Tom", "Juan"]
// console.log(friends[friends.length - 1]);

// //NOTE We can use this method to change the value at an index
//PRACTICE
// const friends = ["John", "Ray", "Kelly", "Tom", "Juan"]
// const test2 = 5 + 4 * 3 * 5
// friends[2] = "Jay";
// console.log(friends);
// friends.push("jnoasdkfj")
// console.log(friends)
// friends.push("New item")
// console.log(friends);
// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// console.log(friends)
// friends.shift()
// console.log(friends)
// friends.unshift("TEST", 123, 456,)
// console.log(friends)
// friends.push("hello", "this", `${test2}`, `😃`)
// console.log(friends)
// friends.shift()
// console.log(friends)
// friends[7] = "Smiley Face"
// console.log(friends)

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// NOTE Exercise
// Lets say we want to calculate someones age with an array of birth years
// This is another way to write this function but i dont like it.
// // const calcAge = function (birthYear) {
// //     return 2037 - birthYear;
// // }

// const calcAge = birthyear => 2024 - birthyear;
// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length -1])
// console.log(age1, age2, age3);

// // //NOTE We can create an array with these function calls because they are expressions
// const ages =[calcAge(years[0]),calcAge(years[1]), calcAge(years[years.length -1])]
// console.log(ages)

//PRACTICE
// const calcAge = (birthYear) => 2024 - birthYear

// const years = [2020, 2015, 1985, 1976, 1969, 1957]
// calcAge()
//  const agesArray = [calcAge(years[0]), calcAge(years[2]), calcAge(years[3])]
// const age1 = calcAge(years[0])
//   const age2 = calcAge(years[2])
//   const age3 = calcAge(years[4])
// console.log(age1, age2, age3)

// console.log(agesArray[1]);
// console.log(agesArray);

//PRACTICE

// const ageCalc = bDay => 2024 - bDay;
// const birthYears = [1979, 1985, 2020, 1776, 1305, 400]
// ageCalc()

// const agesArray = [ageCalc(birthYears[0]), ageCalc(birthYears[1]), ageCalc(birthYears[3]), ageCalc(birthYears[birthYears.length - 1])]
// console.log(agesArray)

// const age1 = agesArray[1]
// const age2 = ageCalc(birthYears[2])
// const age3 = ageCalc(birthYears[birthYears.length - 1])
// const age4 = agesArray.pop()

// console.log(age1, age2, age3, age4);
// console.log(agesArray)
// agesArray.push(age4)
// console.log(agesArray);
// const newAge = agesArray.shift()
// console.log(agesArray)
// agesArray.push(newAge)
// agesArray.push(newAge)
// agesArray.push(newAge)
// console.log(agesArray)

//SUBJECT Built in functions to be applied to arrays called methods
//SUBJECT METHODS (ARRAY OPERATIONS)

// const friends = ["Micheal", "Steven", "Peter"];
// //.push() Adds elements to the end of an array
// const newLength = friends.push("Jay");
// console.log(friends);

// // .unshift() Adds elements to begining of the array
// friends.unshift("John");
// console.log(friends);

// //.pop() Removes elements from the end of the array
// friends.pop(); // last element
// console.log(friends)
// const popped = friends.pop(); // Peter is removed here and stored in the variable popped
// console.log(`returned element that was removed`)
// console.log(friends)
// console.log(popped);
// friends.unshift(popped)
// console.log(friends);

// // .unshift() adds to the first element of the array
// friends.shift(); // removes the first element.
// console.log(friends);
// friends.push(23)
// friends.unshift(23)
// console.log(friends);
// //IMPORTANT
// //NOTE .indexOf() in which position an element is in an array
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); // returns -1 because Bob isnt in the array

// //IMPORTANT NOTE USES STRICT === EQUALITY
// //NOTE .includes() will return true or false if the element is in the array
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));
// console.log(friends.includes("23"))

// //NOTE we can use .included() to use in conditionals
// if (friends.includes("Steven")) {
//     console.log(`You have a friend called Steven`)
// }

// CHALLENGE #2
// Steven wants you to improve his tip calculator,
//  using the same rules as before — tip 15 % of the bill if the bill value is between 50 and 300,
// and if the value is different, the tip is 20 %.

// Your tasks:
// Write a function calcTip that takes any bill value as an input and returns the corresponding tip,
// calculated based on the rules above
// (you can check out the code from the first tip calculator challenge if you need to).
// Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.
// Create an array called tips containing the tip value for each bill, calculated from the
// function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.
//PRACTICE
// const tipCalc = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

// const bills = [125, 555, 44, 35];

// const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2]), tipCalc(bills[3]),]

// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2], tips[3] + bills[3]]

// console.log(bills, tips, totals);

//PRACTICE
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

// console.log(bills, tips, totals);

//PRACTICE
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2])+ bills[2]]
// console.log(bills, tips, totals)

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before —
// tip 15% of the bill if the bill value is between 50 and 300,
// and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip,
// calculated based on the rules above
// (you can check out the code from the first tip calculator challenge if you need to).
// Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.
// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
// BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.

//can also be done with an arrow function
//const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// }
// const bills = [125, 555, 44]
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(totals)
// console.log(calcTip(bills[0]))
// console.log(calcTip(bills[1]))
// console.log(calcTip(bills[2]))
// console.log(bills, tips)
// console.log(calcTip(75))

//SUBJECT OBJECTS (AKA OBJECT LITERALS) (defines KVP)
// NOTE with objects we can define Key Value Pairs
//
// Data structure but we cannot assign keys to it because its an array
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
// ];

// //IMPORTANT the curly braces are used to define a new object
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Stevens"],
// };
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas["friends"][0]}`
// );

//PRACTICE
// const juan = {
//   firstName: "Juan",
//   lastName: "Velez",
//   homeTown: "New Orleans",
//   age: 25,
//   birthYear: 1999,
//   hobbies: ["Fishing", "Traveling", "Movies", "Learning JavaScript"],
//   job: "Software engineer",
//   siblings: ["John", "Jacob", "liz", "Jeff"],
//   pets: ["cat", "dog", "monkey"],
//   favoriteFood: "eggs",
//   traveledTo: ["Italy", "Japan", "Australia", "Guam", "Philipines", "Hong Kong", "Thailand", "Korea", "UK"],

//   calcAge: function () {
//     this.Age = 2024 - this.birthYear
//     return this.Age
//   },
// };

// console.log(juan.calcAge())

// console.log(juan)
// juan.nationality = "American"
// juan.twitter = "@SimpleCoder"
// console.log(juan);
// console.log(juan["siblings"][2]);
// console.log(juan.siblings[2]);
// juan.age = 3
// console.log(juan)
// juan.hasDriversLicense = true
// console.log(juan);

// // Two ways to retrieve data from objects dot and bracket
// console.log(jonas.lastName); //dot notation
// //IMPORTANT REFERENCE bracket notation allows us to put any expression we would like
// console.log(jonas["lastName"]); //bracket notation

// // console.log(jonas.friends[0]) // accessing array values
// //NOTE REFERENCE
// const nameKey = "Name"; //we are storing the name from firstName or lastName and storing it in a variable using nameKey
// console.log(jonas["first" + nameKey]); // we use the + operation to concatinate the string "first" + nameKey = "firstName"
// console.log(jonas["last" + nameKey]);

//IMPORTANT We only need to use bracket notation if we need to compute a property name

//EXAMPLE More examples of using bracket notation
// const interestedIn = prompt("What do you want to know about jonas? choose between firstName, lastName, age, job, and friends");
// console.log(jonas[interestedIn]);

// //NOTE We can use this in logic because if the object doesnt exist it will return undefined (false)
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request! What do you want to know about jonas? choose between firstName, lastName, age, job, and friends");
// }

// NOTE using bracket and dot notation to add new properties to the object
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// CHALLENGE Write a sentence in a dynamic way
// // Jonas has 3 friends and his best friend is called Michael.
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends,
//  and his best friend is called ${jonas.friends[0]}.
//  ${jonas.firstName} lives in ${jonas.location} and
//  he is a ${jonas.job}.`)

// SUBJECT OBJECT METHODS
// NOTE Adding functions to objects
//IMPORTANT to add a function as a KVP we need to use a FUNCTION EXPRESSION NOT a function decloration in order for it to work.
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Stevens"],
//   hasDriversLicense: true,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   }
// };
// console.log(jonas.calcAge(1991));  //dot notation
// console.log(jonas["calcAge"](1991)); //bracket notation (needs to be a string)
//IMPORTANT DRY we can access the keys without passing them in using the method: this

//REFERENCE DRY version
// this uses the: this keyword
// the: this keyword connects jonas object to whatever
// we put the: this keyword in front of.
// this is equal to the object calling the method

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Stevens"],
//     hasDriversLicense: true,

//     calcAge: function () {
//         //NOTEconsole.log(this);
//       return 2037 - this.birthYear;
//     }
//   };
// console.log(jonas.calcAge());

// DRY Another version// NOTE Best version
// We calculate the age once, store it in the object, and retrieve the age as a property from the object
// We are storing a new property in the: this keyword

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Stevens"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };
//  jonas.calcAge() // calling the function
// console.log(jonas.calcAge());
/*IMPORTANT This line calls the calcAge function on the jonas object. This is how you trigger the age calculation. console.log(jonas.age);
                                : Now, the age property has been calculated and stored in the jonas object, so it can be accessed and printed correctly.
                                 We need this function call first to calculate the age! If we dont do this age will be undefined*/

// console.log(jonas.age);

//PRACTICE CHALLENGE Write a function that will return a string - "Jonas is a 46-year old teacher, and he has a driver's license"
// const jonas = {
//   name: "Jonas",
//   birthYear: 1985,
//   job: "teacher",
//   hasDriversLicense: true,
//   friends: ["John", "Jacob", "William"],
//   nationality: "American",
//   spokenLanguages: ["English", "Japanese", "Spanish"],

//   calcAge: function () {
//     this.age = 2024 - this.birthYear
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.name} is a ${this.age}-year old ${this.nationality} ${this.job}, and he ${this.hasDriversLicense ? "has" : "does not have"} a drivers license.
// he has ${this.friends.length} friends, ${this.friends[this.friends.length -1]} is his best friend. He speaks ${this.spokenLanguages.length} languages, ${this.spokenLanguages[0]},
// ${this.spokenLanguages[1]}, and ${this.spokenLanguages[2]}.`
//   }
// };
// //console.log(jonas.calcAge())
// jonas.calcAge()
// jonas.getSummary()
// console.log(jonas.getSummary());
// console.log(jonas);

//PRACTICE
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Stevens"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
//   },
// };
// console.log(jonas.calcAge()); //IMPORTANT This line calls the calcAge function on the jonas object.
// console.log(jonas.getSummary()); //IMPORTANT This line calls the getSummary function on the jonas object.
// console.log(jonas.getSummary());

// Practice CHALLENGE- add a function called get summary to the jonas key value pair that will put out a dynamic sentence.
// "Jonas is a 46-year old teacher, and he has a/no drivers license"

//PRACTICE
// const jonas = {
//   name: "Jonas",
//   birthYear: 1979,
//   job: "teacher",
//   hasDriversLicense: true,

//   ageCalc: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age
//   },
//   summary: function () {
//     return `${this.name} is a ${this.ageCalc()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`
//   },
// };
// jonas.ageCalc()
// jonas.summary()
// console.log(jonas.summary());

//PRACTICE
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Peter", "Stevens"],
//     hasDriversLicense: true,
//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job},
//     and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`
//     }
// };
// console.log(jonas.calcAge())
// console.log(jonas.getSummary())
// console.log(jonas.age)

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the calculations! Remember:
// BMI = mass / (height * height)(mass in kg and height in meters).

// Your tasks:
// For each of them, create an object with properties for their full name, mass, and height
// (Mark Miller and John Smith).Name these objects as mark and john,
// and their properties exactly as fullName, mass and height.

//PRACTICE
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   massCalc: function () {
//     this.BMI = this.mass / (this.height * this.height)
//     return this.BMI
//   },
// };
// mark.massCalc()

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   massCalc: function () {
//     this.BMI = this.mass / (this.height * this.height)
//     return this.BMI
//   },
// };
// john.massCalc()

// console.log(`${mark.fullName}'s BMI ${mark.BMI} is ${mark.BMI > john.BMI ? "higher" : "lower"} than ${john.fullName}'s BMI ${john.BMI}.`);

//PRACTICE
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
// };

// Create a calcBMI method on each object to calculate the BMI(the same method on both objects).
// Assign the BMI value to a property called bmi(lowercase), and also return it from the method.
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     },
// };
// mark.calcBMI() // calling the function
// console.log(mark.calcBMI())
// console.log(mark.bmi)

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     },
// };
// john.calcBMI() // This is another way to call the function so that we can use it.
// console.log(john.calcBMI())
// console.log(john.bmi)
// console.log(`${mark.fullName}'s BMI (${mark.bmi}) is ${mark.bmi > john.bmi ? "higher" : "lower"} than ${john.fullName}'s (${john.bmi})!`);

// Log to the console who has the higher BMI, together with the full name and the respective BMI.
// Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// IMPORTANT: Please make sure to use exactly this formula mass / (height * height), and not this one mass

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember:
// BMI = mass / (height * height)(mass in kg and height in meters).

// Your tasks:
// For each of them, create an object with properties for their full name, mass, and height
// (Mark Miller and John Smith).Name these objects as mark and john, and their properties exactly
// as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI(the same method on both objects).
// Assign the BMI value to a property called bmi(lowercase), and also return it from the method.
// Log to the console who has the higher BMI, together with the full name and the respective BMI.
//     Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// IMPORTANT: The ** operator is not supported in this editor.Please make sure to use
// exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi;
//     }
// };
// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`)
// } else {
//    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`)
// }
// console.log(`${mark.fullName}'s BMI (${mark.bmi}) is ${mark.bmi > john.bmi ? "higher" : "lower"} than ${john.fullName}'s BMI (${john.bmi})!`)

// SUBJECT Iterating through loops

//DRY instead of repeating this code 10X we can create a loop
// console.log('Lifting weights repetitions 1 🏋️‍♀️');
// console.log('Lifting weights repetitions 2 🏋️‍♀️');
// console.log('Lifting weights repetitions 3 🏋️‍♀️');
// console.log('Lifting weights repetitions 4 🏋️‍♀️');
// console.log('Lifting weights repetitions 5 🏋️‍♀️');
// console.log('Lifting weights repetitions 6 🏋️‍♀️');
// console.log('Lifting weights repetitions 7 🏋️‍♀️');
// console.log('Lifting weights repetitions 8 🏋️‍♀️');
// console.log('Lifting weights repetitions 9 🏋️‍♀️');
// console.log('Lifting weights repetitions 10 🏋️‍♀️');

// NOTE IMPORTANT A for loop has a counter (for (let i = 1; i < 10; i++))
//for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//  console.log(`Lifting weights repetitions ${rep} 🏋️‍♀️`);
// }

//PRACTICE Let's make a lift off CountDown

// for (let i = 10; i >= 0; i--) {
//   console.log(`${i} ${i === 1 ? "second" : "seconds"} till liftoff!`)
// }

// write a function that takes in an integer as seconds and prints how many
// seconds there are until lift off and once there are zero seconds left have it return 'Lift Off!'
// (P)arameters: 1, number of seconds
// (R)eturn: 1, string saying 'Lift Off!''
// (E)xample: A countdown from 5, see bellow
// (P)seudocode:
//  - I will need to make sure I know the length of the countdown.
//  - I will need to loop X amount of times depending on seconds given.
//  - Each loop I will send a countdown string to the console.
//  - I should probably clean up plural/singular again.
//  - Once done with the countdown, return the Lift Off string and exit the function.

// function countDown(seconds) {
//   for(let i = seconds; i >= 0; i--) {
//     let secondString = i === 1 ? 'second' : 'seconds'
//         console.log(`There are ${i} ${secondString} left until lift off!`)
//     }
//     return "Lift Off!"
//     }
// console.log(countDown(5))

/*Write a function that takes in an array containing numerical values,
and returns a new array with the largest value removed.
There might be duplicate values. Values might be positive or negative. 
The original array should not be modified, and the items should remain
in the same order as before for the returned array. 
For this challenge, we will ask you to NOT use any array functions 
(including map()/filter()/sort()) nor use Math.max()
Test Case: [7,2,5,7,1] ...returns [2,5,1] */

//PRACTICE
// function removeLargest(arr) {
//   var max = 0
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] !== max) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(removeLargest([1, 7, 2, 5, 7, 1]));

//PRACTICE
// function removeSmallest(arr) {
//   var min = 0;
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//     if (arr[i] !== min) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(removeSmallest([7, 2, -5, 7, 1, -5]));
// console.log(removeSmallest([23, 3, 4, -21, 4, -21, 5]));

// NOTE Looping through Arrays //We are only reading values here

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
// }

//NOTE if we want to log the type of variables in the array we can console.log(typeof jonas[i])
//NOTE this only reads values from an array.
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];
// for (let i = 0; i < jonas.length; i++) {
//   //if we want to log the type of variables in array we use typeof.
//   console.log(jonas[i], typeof jonas[i]);
// }

//NOTE
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];
// for (let i = 0; i < jonas.length; i++) {
//   //if we want to log the type of variables in array we use typeof.
//   console.log(jonas[i], typeof jonas[i]);
// }

//NOTE IMPORTANT
//SUBJECT Creating a new array from elements from a different array

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];
//NOTE we neet to create an empty array to push values in.
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
// console.log(typeof jonas[i]);

//NOTE Filling types array
//types[i] = typeof jonas[i];
//NOTE Filling types array with .push()
//   types.push(typeof jonas[i]);
// }
// console.log(types);

//TRANSLATION types at position(index) [i] (from the empty array [])
//should be equal to typeof jonas at position(index)[i]
// NOTE because [i] loops through the array the position will change and will
//add them to the types variable.
//EXAMPLE iteration[0] = types[0] = typeof jonas[0], iteration[1] = types[1] = typeof jonas[1], and so on
//
//CLEAN

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   types.push(typeof jonas[i]);
// }
// console.log(types);

//EXAMPLE More practical example
// const currentYear = 2024
// const birthYears = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//   ages.push(currentYear - birthYears[i]);
// }
// console.log(ages);

//SUBJECT Continue and Break statements for loops
// continue = to exit the current iteration of the loop and go to the next one.
// break = completely terminate the whole loop
//NOTE
// lets say we want to only print elements of the array that are strings
// continue statement is good for this
// console.log("--- ONLY STRINGS ---");
//EXAMPLE continue statement
// const jonas = [
//     "Jonas",
//     "Schmedtmann",
//     2037 - 1991,
//     "teacher",
//     ["Micheal", "Peter", "Steven"],
//     true,
//   ];
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== "string") continue;

//     console.log(jonas[i], typeof jonas[i]);
// }
//TRANSLATION if the type of current element jonas[i] is NOT a string then skip it

//SUBJECT  BREAK statement in loop
//NOTE we will log no other element after a number is found
// console.log("--- BREAK WITH NUMBER---");

//const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;
//   console.log(jonas[i], typeof jonas[i]);
// }
//TRANSLATION if the type of current element jonas[i] is equal to a number, break out of the string
//NOTE Loop over an array backwards and loop within a loop

// SUBJECT loop over array backwards
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Micheal", "Peter", "Steven"],
//   true
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }
//TRANSLATION start at the end of the array (jonas.length -1), keep running the loop till [i] = 0

//SUBJECT Creating a loop within a loop
//NOTE Lets say we have 3 different excercises and want to repeat each of them 5 times. 15 repetitions, 5 for each excercise

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`------ Starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++){
//         console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}🏋️‍♀️`)
//         }
//     }
//TRANSLATION The first iteration will run once out of three times then go to the next loop.
// the second loop will run five times the then the second iteration of the first loop will run once.
// the second loop will run again five times and so on until the first loop runs 3 times

//SUBJECT while loop  (we can only specify the condition)
// NOTE IMPORTANT (While loop is more versitile because it doesnt really need a counter)

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE LOOP: Lifting weights repetitions ${rep} 💪🏼`);
//     rep++
// }
//TRANSLATION We want to keep the loop running while rep is <=10. Or while the condition is true
// NOTE the while loop only needs the condition to stay true to keep running. No need for a counter

//EXAMPLE Example of a while loop without a counter or number that isnt increasing
// NOTE this while loop will role a dice of random numbers 1-6 and keep running while the number is different from 6

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }
//NOTE Math.trunc() removes fractions, Math.random() creates a random number

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// Create an array called bills containing all 10 test bill values.

// Use the calcTip function we wrote before(included in the starter code)
// to calculate tips and total values(bill + tip) for every bill value in the bills array.
// Use a for loop to perform the 10 calculations!

//PRACTICE
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let tips = []
// let totals = []
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i])
//   tips.push(tip)
//   totals.push(tip + bills[i])
// }
// console.log(bills, tips, totals)

// function calcAverage (arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//    sum += arr[i]
//   }
//   return sum / arr.length
// }
// console.log(calcAverage(tips))

//BONUS:
// Write a function calcAverage which takes an array called arr as an argument.
// This function calculates the average of all numbers in the given array.
// This is a DIFFICULT challenge(we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array.
// To do the addition, start by creating a variable sum that starts at 0.
// Then loop over the array using a for loop.In each iteration, add the current value to the sum variable.
// This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array
//   (because that's the number of elements).

// Call the function with the totals array.
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

//PRACTICE
//const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// Create empty arrays for the tips and the totals (tips and totals)

// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let tips = []
// let totals = []

//CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// Create an array called bills containing all 10 test bill values.
// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before(included in the starter code)
// to calculate tips and total values(bill + tip) for every bill value in the bills array.
// Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

//PRACTICE
// const calcTip = bill => bill >= 50 &&  bill <= 300 ? bill * .15 : bill * .2;

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip)
//     totals.push(bills[i] + tip)
// }
// console.log(bills, tips, totals)

// function calcAverage(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage([24, 242, 24, 4]))
// console.log(calcAverage(totals))
// console.log(calcAverage(tips))

// BONUS:
// Write a function calcAverage which takes an array called arr as an argument.
// This function calculates the average of all numbers in the given array.
// This is a DIFFICULT challenge(we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array.
// To do the addition, start by creating a variable sum that starts at 0.
// Then loop over the array using a for loop. In each iteration, add the current value to the sum variable.
// This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array
// (because that's the number of elements).

// Call the function with the totals array.
