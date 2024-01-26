/*
From LeetCode: Move Zeroes challenge
Given an array of values, move all the zero values to the end of the array IN PLACE, while keeping the order
of the other non-zero values the same.
*/
function moveZeroesToFront(nums) {
    let left_pointer = 0; // This will represent where we will save a non-zero value
    // Edge case (kind of): non-zero values at the beginning
    while (nums[left_pointer] !== 0 && left_pointer < nums.length) {
        left_pointer++;
    }
    // Start at first index that has a 0 value (k is the right pointer)
    for (let k = left_pointer; k < nums.length; k++) {
        if (nums[k] === 0) { // If we have a zero value - just move on
            continue;
        } else {
            // Swap values
            [nums[k], nums[left_pointer]] = [nums[left_pointer],nums[k]];
            // Move left pointer
            left_pointer++;
        }
    }
};