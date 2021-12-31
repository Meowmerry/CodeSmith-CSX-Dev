/* ============================== INSTRUCTIONS ==============================
 ================================================================================ */
/* 
Challenge 3
Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.
*/

/* ========================== SOLUTION 1  ======================================
================================================================================ */
function palindrome(string) {
    // declare a lowerString and assign to string using toLowerCase method to make all lowerCase
    const lowerString = string.toLowerCase()
    // declare a noSymbolsString to store RegEx to remove all symbols
    // const noSymbolsSting = lowerString.replace(/[^a-zA-z0-9]/g, '');
    // const noSymbolsSting = lowerString.replace(/[\W]/g, '');
    const noSymbolsSting = lowerString.replace(/[^a-z0-9]/gi, '');
    // base case : check if string length <= 1 --> return ture;
    if (noSymbolsSting.length <= 1) return true;
    // base case : check if first and last charecter are not equal -> return false
    if (noSymbolsSting[0] !== noSymbolsSting[noSymbolsSting.length - 1]) return false;
    // recursive case : return invoking palindrome function and passed in noSymbolsString using the slice method to remove first and last charector
    return palindrome(noSymbolsSting.slice(1, -1))
}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false

/* ========================== SOLUTION 2  ======================================
================================================================================ */
const isLetter = (c) => c.length === 1 && c.toLowerCase() !== c.toUpperCase();
const palindrome = (str, left = 0, right = str.length - 1) => {
    if (left > right) return true;
    if (!isLetter(str[left]))
        return palindrome(str, left + 1, right);
    else if (!isLetter(str[right]))
        return palindrome(str, left, right - 1);
    else if (str[left].toLowerCase() === str[right].toLowerCase())
        return palindrome(str, left + 1, right - 1);
    else
        return false;
}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false


/* ========================== SOLUTION 3  ======================================
================================================================================ */

const isAlphabet = letter => 'a' <= letter && letter <= 'z';
const palindrome = (string) => {
    if (string.length < 2) return true;
    string = string.toLowerCase();
    let start = 0;
    let end = string.length - 1;
    while (!isAlphabet(string[start])) start++;
    while (!isAlphabet(string[end])) end--;
    return string[start] != string[end] ? false : palindrome(string.slice(start + 1, end));
}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false