// Problem where we determine whether we've found a duplicate value in an array or not

var containsDuplicate = function(nums) {
    // First approach: nested loops (inefficient)
    // // Two loops: outer loop will represent the initial value we're using
    // for (let k = 0; k < nums.length - 1; k++) {
    //     // console.log("First value is "+nums[k]);
    //     // Inner loop - second value to compare against the first value
    //     for (let m = k + 1; m < nums.length; m++) {
    //         // console.log(`Comparing the first value ${nums[k]} to the second value ${nums[m]}`)
    //         if (nums[k] === nums[m]) { // Duplicate found
    //             return true;
    //         }
    //     }
    // }
    // return false; // No duplicates found - so return false

    // Second approach - use a hash map (object) to keep track of what values we've found
    let foundValues = {}; // Will hold all the values we've found
    for (let k = 0; k < nums.length; k++) {
        // console.log("Found values so far:");
        // console.log(foundValues);
        // If the current value has been found already (so it's a duplicate)
        if (nums[k] in foundValues) {
            return true;
        } else {
            // Save the current value into the object (hash map)
            foundValues[nums[k]] = true; // true is a placeholder
        }
    }
    return false; // No duplicates found
};