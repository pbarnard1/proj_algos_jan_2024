var merge = function(nums1, m, nums2, n) {
    // Don't need this block after all - the uncommented code below accounts for these edge cases
    // if (n == 0) {
    //     return; // Nothing to do - keep the first array as is, since there's no placeholder
    // } else if (m == 0) {
    //     // Take the second array and copy it over to the first array
    //     for (let k = 0; k < n; k++) {
    //         nums1[k] = nums2[k];
    //     }
    //     return;
    // }
    // Pointers for where we are in terms of index in each array
    let pointer1 = m-1;
    let pointer2 = n-1;
    let currentIndex = m + n - 1;
    // Loop while we can go through both arrays
    while (pointer2 >= 0 && pointer1 >= 0) {
        // console.log(`Pointer 1 = ${pointer1}`);
        // console.log(`Pointer 2 = ${pointer2}`);
        // Grab from second array if the value is bigger or the same
        if (nums2[pointer2] >= nums1[pointer1]) {
            nums1[currentIndex] = nums2[pointer2];
            pointer2--;
        } else {
            nums1[currentIndex] = nums1[pointer1];
            pointer1--;
        }
        currentIndex--;
    }
    // Extra loop for if we're out of values from the original first array, so grab the second array's values and add those
    if (pointer2 >= 0) {
        while (pointer2 >= 0) {
            nums1[currentIndex] = nums2[pointer2];
            pointer2--;
            currentIndex--;
        }
    }
};

// Various test cases
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2, 5, 6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
nums1 = [1,0], m = 1, nums2 = [2], n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);
nums1 = [2,0], m = 1, nums2 = [1], n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);
nums1 = [1], m = 1, nums2 = [], n = 0;
merge(nums1, m, nums2, n);
console.log(nums1);
nums1 = [0], m = 0, nums2 = [1], n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);