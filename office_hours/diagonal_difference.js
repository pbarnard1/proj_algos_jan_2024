// Demo with 1-D and 2-D arrays - how to grab values
let x = [1, 3, 4];
// How do we get the value 3 from this array?
console.log(x[1]);
// 2-dimensional array
let y = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
// How do we grab the row [9, 8, 9]?
console.log(y);
console.log(y[2]);
// How do we grab the value 6 from y?
console.log(y[1][2]);

/*
    Calculate the absolute difference between diagonals in a square matrix (a 2-D array with the
    same number of rows and columns), where the diagonals are from top left to bottom right and 
    bottom left to top right. (From Hacker Rank)
*/

// Actual function we're writing, where we pass in an array of values (the square matrix)
function diagonalDifference(arr) {
    let topLeftBottomRightSum = 0;
    let bottomLeftTopRightSum = 0;
    // Loop that will calculate each sum
    for (let i = 0; i < arr.length; i++) {
        // Top left to bottom right sum
        topLeftBottomRightSum += arr[i][i];
        console.log("Adding " + arr[i][i] + " to the sum from row "+ i);
        console.log("Top left bottom right sum = "+topLeftBottomRightSum);
        // Top right to bottom left sum
        bottomLeftTopRightSum += arr[i][arr.length - 1 - i];
        console.log("Adding " + arr[i][arr.length - 1 - i] + " to the sum from row "+ i);
        console.log("Bottom left top right sum = "+bottomLeftTopRightSum);
    }
    // Find the difference between these sums, while making sure it's not negative
    return Math.abs(topLeftBottomRightSum - bottomLeftTopRightSum);
}

let y1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(diagonalDifference(y));
console.log(diagonalDifference(y1));