/* Declare a variable ‘names’ and set it to an array with the values ‘Chris’, ‘Samantha’, ‘Richard’, and ‘Kyle’ in it. */


/*
Create a function that takes in a string and returns that string in alternating cases starting with Upper Case
for example:
dog -> DoG
chair -> ChAiR
elephant -> ElEpHaNt 
*/
// In : String
// Out : String with Uppercase alternating
// create a func alternating that accept string
// declare result assign to empty string
// interate thru string use a for loop
// check if i is even reassign string to Uppercase
// otherwish i result lowercase

// return string
const alteratingStr = (str) => {
  return [...str].reduce((output, curr, i) => {
    if (i % 2 !== 0) output += curr.toLowerCase();
    else output += curr.toUpperCase();
    return output;
  }, '')
}
// console.log(alteratingStr('dog')) // DoG
// console.log(alteratingStr('chair')) // ChAiR
// console.log(alteratingStr('elephant')) // ElEpHaNt

/*
create a function that takes in that name string and outputs a string with all the vowels removed
for example: "David" -> "Dvd"
*/
const removeVowel = (str) => {
  return str.replace(/[aeiou]/g, '')
}
console.log(removeVowel('David')) // "Dvd"

/*Create a function that takes in an array of numbers and returns the sum of its cubes.
Examples
sumOfCubes([1, 5, 9]) //➞ 855
sumOfCubes([3, 4, 5]) //➞ 216
3*3*3
4*4*4
5*5*5
sumOfCubes([2]) //➞ 8
sumOfCubes([]) //➞ 0 */


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
/* ============= SOLUTION 1 Loop  ============================= */
const addNumbers = (nums) => {
  let sum = 0;
  for (let i = 0; i <= nums; i += 1) {
    sum += i
  }
  return sum;
}
//console.log(addNumbers(4))
/* ============= SOLUTION 1 Recursive  ============================= */
const addNumbersRecursive = (nums, sum = 0) => {
  if (nums === 0) return sum;
  return addNumbersRecursive(nums - 1, sum + nums)
}
//console.log(addNumbersRecursive(4))
/*
Create a function "between40And400" that takes a number as an argument.
"between40And400" should return a true if the number passed to it is between 40 and 400 exclusive.
For example, if the input is 35 then your function should return false and if the input is 372 it should return true.
*/

const between40And400 = (nums) => {
  if (nums > 40 && nums <= 400) return true;
  else return false;
}
// console.log(between40And400(35)) // false
// console.log(between40And400(372)) // true
// console.log(between40And400(200)) // true

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 130 then your function should return false and if the input is 500 it should return true.
*/
const divBy100 = (nums) => {
  if (nums % 100 === 0) return true;
  else return false;
}
console.log(divBy100(130)) // false
console.log(divBy100(500)) // true
console.log(divBy100(300)) // true

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/


/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 40 and less than the number 400,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

/* Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property. */

/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.
const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
nextAuthor() -> 'Earnest Hemingway'
nextAuthor() -> 'Agatha Christie'
*/

/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/


/*
Create a function 'amplify' that takes a number and returns an array from 1 to the given number, where: 
If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number) and if the number 
cannot be divided evenly by 4, simply return the number.
For example, if we pass the number 5 to the function 'amplify' it should return the array [1, 2, 3, 40, 5]
*/

// Input : Number
// Output : ARray
// create a fucn take Number as argument
// declare an array assign to empty array
// iterate thru number
// check if the nubmer whice divided by 4 and times 10 and push to array
// other number pust to array
// return array

const amplify = (nums) => {
  const newArr = [];
  for (let i = 1; i <= nums; i++) {
    if (i % 4 === 0) {
      newArr.push(i * 10);
    } else {
      newArr.push(i)
    }
  }
  return newArr;
}
// console.log(amplify(5)) // [1, 2, 3, 40, 5]
// console.log(amplify(10)) // [1, 2, 3, 40, 5 , 6 , 7 , 80 , 9 , 10]
// console.log(amplify(12)) // [1, 2, 3, 40, 5 , 6 , 7 , 80 , 9 , 10, 11 , 120]
/* 
Check all values in an array÷
Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
var allAreLessThanSeven = all([1,2,9], function(num){
      return num < 7;
 });
console.log(allAreLessThanSeven); // false
*/
const all = (arr, callback) => arr.reduce((acc, curr) => ((callback(curr) ? acc = true : acc = false), acc), false)
var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});
console.log(allAreLessThanSeven); // false

/*

Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.


const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'
*/

/* 
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

*/

/*
Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.


const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

*/

/*
Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.


const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
*/


/* 
Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8
*/


/* 
Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
*/


/* RECURSION
Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.
input : Two nubmer
output : Array
console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

*/
/*
Input : Two Number  (x, y)
Output : Array 
create a funciton take two number
declare a newArr assign to newArr
base case : x === y - 1  return newArr
fil the array of x + 1 each time function call
recursive case : invoke getRangeBetween and passed x increment by1, y, newArr
*/
const getRangeBetween = (x, y, newArr = []) => {
  if (x === y - 1) return newArr;
  newArr.push(x + 1);
  return getRangeBetween(x + 1, y, newArr)
}
// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

/*
Challenge :
Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".

console.log(cleaned("")) // "";
console.log(cleaned("yyzzza")) // "yza";
console.log(cleaned("aabbcc")) // "abc";
console.log(cleaned("Helloo")) // "helo";
*/

/* 
Input : String 
Output : Strin with out repeat

create a func take string as aguments
  declare a variable result assign to empty string
  declare a i assign to 0
  base case : string is empty return result
  if(string[i] === string[i + 1]) reassign result at to current element
  recursive case : invoke cleaned func passed string, result , i increment by 1

*/
const cleaned = (str, result = '', i = 0) => {
  if (str[i] === undefined) return result;
  if (str[i] !== str[i + 1]) result += str[i];
  return cleaned(str, result, i + 1)
}


// console.log(cleaned("")) // "";
// console.log(cleaned("yyzzza")) // "yza";
// console.log(cleaned("aabbcc")) // "abc";
// console.log(cleaned("Helloo")) // "helo";

/* Given a string and a non-empty substring sub, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative. 

console.log(strCopies("catcowcat", "cat", 2) )//=> true
console.log(strCopies("catcowcat", "cow", 2)) //=> false
console.log(strCopies("catcowcat", "cow", 1)) //=> true
*/

const strCopies = () => {


}
console.log(strCopies("catcowcat", "cat", 2))//=> true
console.log(strCopies("catcowcat", "cow", 2)) //=> false
console.log(strCopies("catcowcat", "cow", 1)) //=> true


function strCopies(string, subString, num, numOfTimes = 0) {
  if (string === '') return false;
  if (num === numOfTimes) return true;
  let subString2 = string.slice(0, 3);
  if (subString2 === subString) numOfTimes += 1;
  return strCopies(string.slice(1), subString, num, numOfTimes);
}

console.log(strCopies("catcowcat", "cat", 2))//=> true
console.log(strCopies("catcowcat", "cow", 2)) //=> false
console.log(strCopies("catcowcat", "cow", 1)) //=> true
