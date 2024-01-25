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
