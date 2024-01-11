/*
Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
Return a new array containing the first array's elements, followed by the second array's elements. 
Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
*/

function concatArrays(arr1, arr2) {
    let newArr = []; // Empty array that will hold the values merged together
    /* Let's merge the arrays */
    // Go through the first array, one at a time, from beginning to end
    for (let k = 0; k < arr1.length; k++) {
        // Add the current item from the first array and add to the merged array
        newArr.push(arr1[k]);
        console.log("new array is:");
        console.log(newArr);
    }
    // Now do the same thing with the second array
    for (let k = 0; k < arr2.length; k++) {
        // Add the current item from the second array and add to the merged array
        newArr.push(arr2[k]);
        console.log("new array is:");
        console.log(newArr);
    }
    console.log("Final array is:");
    console.log(newArr);

    return newArr; // Return the merged array as a new array
}

let x1 = [1, 3, 8], x2 = ["Hello", "World", true];
concatArrays(x1, x2);
console.log(x1.push(...x2));
