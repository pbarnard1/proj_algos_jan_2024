/*
Given a numerical array, reverse the order of values, in-place. 
The reversed array should have the same length, with existing elements 
moved to other indices so that order of elements is reversed. 
Working 'in-place' means that you cannot use a second 
array – move values within the array that you are given. As always, 
do not use built-in array functions such as splice().
*/

function reverseArray(arr) {
    // Reverse values, stopping halfway through so we don't accidentally reverse them back
    for (let k = 0; k < Math.floor(arr.length / 2); k++) {
        console.log("Switching " + arr[k] + " and " + arr[arr.length - 1 - k]);
        // Swap values
        let temp = arr[k];
        arr[k] = arr[arr.length - 1 - k]
        arr[arr.length - 1 - k] = temp;
        // // Alternate way to swap
        // [arr[k], arr[arr.length - 1 - k]] = [arr[arr.length - 1 - k ], arr[k]]
        console.log("Now the array is:");
        console.log(arr);
    }
}
// Test cases
let x1 = [1, 2, 3, 4, 5];
console.log(x1);
reverseArray(x1);
console.log(x1);
let x2 = [10, 3, 7, -3, 0, 6];
console.log(x2);
reverseArray(x2);
console.log(x2);
let x3 = []; // Edge case - an empty array
console.log(x3);
reverseArray(x3);
console.log(x3);

/*
Valid sets of parentheses always open before they close, for example. 
For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every 
parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined 
")" is premature: there is nothing open for it to close.
*/

function isValidParentheses(inputStr) {
    let currentLeftParenCount = 0; // Number of UNPAIRED "("
    // Loop through the string
    for (let k = 0; k < inputStr.length; k++) {
        let curChar = inputStr[k]; // Grab current character
        if (curChar == "(") { // New unpaired "("
            currentLeftParenCount++;
        } else if (curChar == ")") { // Paired "(" and ")"
            currentLeftParenCount--;
            if (currentLeftParenCount < 0) { // A ")" that can't be paired up
                return false;
            }
        }
    }
    return currentLeftParenCount == 0; // Check to see if we have no more unpaired parentheses (>0 means unpaired "(")
}

let str1 = "gre(e(n) ligh)t"; // true
let str2 = "blu((e) light))"; // false
let str3 = "re(d)) light"; // false
let str4 = "orange(() light"; // false
let str5 = "hello(("; // false
console.log(isValidParentheses(str1));
console.log(isValidParentheses(str2));
console.log(isValidParentheses(str3));
console.log(isValidParentheses(str4));
console.log(isValidParentheses(str5));