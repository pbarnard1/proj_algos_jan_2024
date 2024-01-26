// Non-recursive countdown from 10 to 0, then print "Lift off!"
function countdown() {
    for (let k = 10; k >= 0; k--) {
        console.log(k);
    }
    console.log("Lift off!");
}

countdown();

// Recursive version - note the parameter!!
function rCountdown(k) {
    console.log(k);
    if (k === 0) { // Base case - if we don't include this, this runs forever until the call stack overflows!
        console.log("Liftoff!");
    } else {
        rCountdown(k-1);
    }
}

rCountdown(10);

// Non-recurive version of factorials
/* Factorial examples:
0! = 1
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
....
n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
*/
function factorial(n) {
    n = Math.floor(n); // To cut off the decimal, if the number has one
    // Edge case
    if (n <= 0) {
        return 1;
    }
    let product = 1;
    // Start off at n, and multiply going down the line
    for (let k = n; k > 0; k--) {
        product *= k; // Alternatively, product = product * k;
    }
    return product;
}

console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));

// Recursive version of the factorial problem

function rFactorial(n) {
    n = Math.floor(n); // To cut off the decimal, if the number has one
    // Edge case (the value is 0 or negative) - and base case (the value is 1)
    if (n <= 1) {
        console.log("Returning 1");
        return 1;
    } else {
        console.log(`Calculating ${n} * (${n - 1})!`)
        let result = n * rFactorial(n-1); // Here is the recursive step
        console.log("Returning "+ result);
        return result;
    }
}

console.log(rFactorial(5));

// An array of arrays - counting the number of non-empty (empty arrays, empty objects don't count) values
function countValuesInArray(arr) {
    let itemsFound = 0; // The number of items we have found in the array - including nested arrays
    for (let k = 0; k < arr.length; k++) {
        if (Array.isArray(arr[k]) && arr[k].length > 0) {
            let newItems = countValuesInArray(arr[k]);
            console.log("The array");
            console.log(arr[k]);
            console.log(`has ${ newItems } items`);
            itemsFound += newItems; // Recursive step
        } else if (arr[k].length === 0) { // Edge case: nested arrays, but they're all empty, such as [[]]
            continue; // Go to next iteration of loop immediately
        } else { // NOT an array, so add 1 to the count
            itemsFound++;
            console.log(`${arr[k]} is not an array.  Adding 1, and now we have ${itemsFound} found.`)
        }
    }
    return itemsFound;
}
let testArr1 = [1, 10, true, [1, 8], [[]], [[1,3],[1,8,[2]]],10];
console.log(countValuesInArray(testArr1));

/*
Fibonacci sequence
k = 0: 0
k = 1: 1
k = 2: 1
k = 3: 2 (k = 2 term + k = 1 term, or 1 + 1)
k = 4: 3 (k = 3 term + k = 2 term, or 2 + 1)
...
k = n: n-1th term + n-2th term
*/

/*
Inefficient version:
function fibonacci(k) {
    if (k <= 1) {
        return k;
    } else {
        return fibonacci(k-1) + fibonacci(k-2);
    }
}
*/

// Improved version with memoization
function fibonacci(k, fibonacciTerms = {}) { // Note the object here - this will hold the previously calculated terms!!
    // Base cases:
    if (k <= 1) {
        fibonacciTerms[k] = k;
        console.log(`Now adding the ${k}th term`);
        console.log(fibonacciTerms);
        return k;
    } else {
        let result = 0;
        // If (k-1)th term wasn't found, calculate it recursively
        if (!fibonacciTerms.hasOwnProperty(k-1)) {
            console.log(`Now calculating the ${k-1}th term`);
            fibonacciTerms[k-1] = fibonacci(k-1, fibonacciTerms); // Note the memo being passed in to save recursive calls!
            console.log(fibonacciTerms);
        }
        result += fibonacciTerms[k-1]; // Add k-1th term
        // If (k-2)th term wasn't found, calculate it recursively
        if (!fibonacciTerms.hasOwnProperty(k-2)) {
            console.log(`Now calculating the ${k-2}th term`);
            fibonacciTerms[k-2] = fibonacci(k-2, fibonacciTerms); // Note the memo being passed in to save recursive calls!
            console.log(fibonacciTerms);
        }
        result += fibonacciTerms[k-2]; // Add k-2th term
        return result;
    }
}
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
// console.log(fibonacci(100)); // A VERY large number

// CHALLENGE: Try to minimize the recursive calls even more!
