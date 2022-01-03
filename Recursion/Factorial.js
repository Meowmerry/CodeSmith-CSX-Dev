/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */

/* Challenge: Factorial
Write a function that returns the factorial of a number.

EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

Input: {Number} num - number whose factorial is sought
Output: {Number}


/* ========================== SOLUTION 1  ======================================
================================================================================ */
function factorial(num) { // num = 2
    //base case:
    //if num is equal to 0
    if (num === 0 || num === 1) return 1;
    //return 1
    //recursive case:
    return num * factorial(num - 1); // 2 * 1
}
// return 4 * f(3) return 3 * f(2) return 2 * f(1) return 1 
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
console.log(factorial(1)); // => 1
console.log(factorial(2)); // => 2

/* ========================== SOLUTION 2  ======================================
================================================================================ */
// Input: {Number} num - number whose factorial is sought
// Output: {Number}
// create a funciton factorial accepg num as argument, 
function factorial(num, product = 1) {
    // base case : if num is equal to 0 or 1 return 1;
    if (num === 0 || num === 1) return product;
    // recusive case : calling function recursively, with the num - 1 and product * num;
    return factorial(num - 1, product * num)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1

/* ========================== SOLUTION 3  ======================================
================================================================================ */
function factorial(num, newNum = 1) {
    // base case : if num is equal to 0 or 1 return 1;
    if (num === 0 || num === 1) return newNum;
    // recursive case : invoking factorail function and passed in the new num input;
    const newInput = num * newNum;
    return factorial(num - 1, newInput);// f(4), f(3,4) // f(2,12) // f(1,24) ==> 4 * 3 * 2 * 1 = 24;
}
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
console.log(factorial(2)); // -> 2

/* ========================== SOLUTION 4 ======================================
================================================================================ */
function factorial(num, product = 1) {
    // base case : when num is 1, return product
    if (num === 0 || num === 1) return product
    //  multiply the product and num into new product
    const newProduct = product * num;
    // decrement num by 1 each time
    const newNum = num - 1;
    // recursive case with updated inputs;
    return factorial(newNum, newProduct)

}
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
console.log(factorial(2)); // -> 2
/* ========================== SOLUTION 5 ======================================
================================================================================ */
const factorial = (num, product = 1) => num === 0 || num === 1 ? product : factorial(num - 1, product * num);
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
console.log(factorial(2)); // -> 2


