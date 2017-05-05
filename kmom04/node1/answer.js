#!/usr/bin/env node

/**
 * @preserve 5ad5b57769b4445de998504702ebf81d
 *
 * 5ad5b57769b4445de998504702ebf81d
 * linux
 * node1
 * emmd12
 * 2017-02-18 09:34:54
 * v2.2.30 (2017-02-14)
 *
 * Generated 2017-02-18 10:34:54 by dbwebb lab-utility v2.2.30 (2017-02-14).
 * https://github.com/mosbth/lab
 */"use strict";


//import dbwebb from "./.dbwebb.js";
const dbwebb = require("./.dbwebb.js");

var ANSWER = null;
console.log(dbwebb.prompt + "Ready to begin.");



/** ======================================================================
 * node1 - JavaScript med Nodejs
 *
 * JavaScript using nodejs.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . nodejs built-ins
 *
 * In this section we try out some of the new nodejs and ES6 features.
 *
 */



/**
 * Exercise 1.1
 *
 * Create a variable called `numbersArray` holding the numbers 2,48,19,12,93.
 *
 * Use find to get the first occurence of a number bigger than or equal to 42.
 *
 * Answer with the number.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let numbersArray = [2, 48, 19, 12, 93];

let number = numbersArray.find( (element) => {return element >= 42;});


ANSWER = number;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Find the smallest number in `numbersArray` by using the spread operator
 * `...` and the function `Math.min()`.
 *
 * Answer with the smallest number.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = Math.min(...numbersArray);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Create a function called `meaningOfLife()` with one default parameter with
 * the value of 42.
 *
 * The function should return the sentence 'The meaning of life is '
 * concatenated with the parameter.
 *
 * Answer with a call to the `meaningOfLife()` function without any
 * parameters.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


let meaningOfLife = (element=42) => {
    return "The meaning of life is " + element;
};



ANSWER = meaningOfLife();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Check if the word Crocodile contains the letters 'oo'. Return true or false
 * depending on the answer.
 *
 * Tip: Use nodejs function `includes`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let word = "Crocodile";




ANSWER = word.includes("oo");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Check if the word Crocodile starts with the letters 'El'. Return true or
 * false depending on the answer.
 *
 * Tip: Use nodejs function `startsWith`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = word.startsWith("El");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Filtering arrays
 *
 * In this section we filter arrays in different ways.
 *
 */



/**
 * Exercise 2.1
 *
 * Use `numbersArray` from above holding the numbers 2,48,19,12,93.
 *
 * Use a for-loop to save all numbers smaller than 42 in a new array.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let newArray = [];

numbersArray.forEach((element) => {
    if (element < 42) {
        newArray.push(element);
    }
});




ANSWER = newArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Create a variable called `moreNumbersArray` holding the numbers
 * 2,48,19,12,93,65,39.
 *
 * Use the built-in higher-order function `filter` and a callback function to
 * filter out all numbers bigger than or equal to 42.
 *
 * Use arrow-notation to keep the code short and concise.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let moreNumbersArray = [2, 48, 19, 12, 93, 65, 39];

let filter42 = (number) => {
    return number <= 42;
};


ANSWER = moreNumbersArray.filter(filter42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 3 . Transforming arrays
 *
 * In this section we change arrays using the higher-order functions map and
 * reduce.
 *
 */



/**
 * Exercise 3.1
 *
 * Create a variable called `stringArray` holding the strings 'Neil
 * Armstrong','Michael Collins','Buzz Aldrin'.
 *
 * Use a for-loop to concatenate the string ' was on the apollo 11' too each
 * name in the array.
 *
 * Store the result in a new array and answer with that array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


let stringArray = ["Neil Armstrong", "Michael Collins", "Buzz Aldrin"];

let newArray1 = [];

stringArray.forEach( (element) => {
    newArray1.push(element + " was on the apollo 11");
});

ANSWER = newArray1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2
 *
 * Use the `stringArray` from above and the built-in higher-order function
 * `map` to concatenate the string ' was not on the apollo 10' and each name.
 *
 * Use arrow notation to keep the code simple and concise.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let newArray2 = stringArray.map(name => name + " was not on the apollo 10");




ANSWER = newArray2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3
 *
 * Create a variable called `maybePrimeNumber` holding the numbers
 * 5,8,11,14,17,20,23,28,31.
 *
 * In a for-loop sum all prime numbers from `maybePrimeNumber`, you need to
 * find out whether or not the number is a prime number.
 *
 * Answer with the resulting sum.
 *
 * Write your code below and put the answer into the variable ANSWER.
*/

let maybePrimeNumber = [5, 8, 11, 14, 17, 20, 23, 28, 31];

let isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (Math.pow(i, number-1) % number == 1) {
            return number;
        }
        else {
            return 0;
        }
    }
};

var sum = 0;

maybePrimeNumber.forEach(number => {sum += isPrime(number);});


ANSWER = sum;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/**
 * Exercise 3.4
 *
 * Create a function `isNotPrime()` that takes one parameter (an integer) and
 * tests if that number is a prime number. If the number is not prime, the
 * number is returned otherwise return 0.
 *
 * Use the built-in higher-order functions `reduce` to sum all numbers that
 * are NOT prime numbers.
 *
 * Answer with the resulting sum.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


let isNotPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (Math.pow(i, number-1) % number == 1) {
            return 0;
        }
        else {
            return number;
        }
    }
};

var sumOfArray = array_arg => {
    array_arg.unshift(0);

    let result = array_arg.reduce( function (accumulator, currentValue) {
        return accumulator + isNotPrime(currentValue);
    });

    array_arg.shift();

    return result;
};

ANSWER = sumOfArray(maybePrimeNumber);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, true);


process.exit(dbwebb.exitWithSummary());
