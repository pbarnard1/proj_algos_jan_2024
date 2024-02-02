var lengthOfLongestSubstring = function(s) {
    let charSet = new Set(); // Hold all the characters in the window
    let longestLength = 0; // Will hold the length of the longest substring we find
    let index = 0; // Index where the window starts
    let windowLength = 1; // How big the window is right now
    // Here is the sliding window
    while (index + windowLength <= s.length) {
        let curChar = s[index + windowLength - 1]; // Get newest character
        // console.log("Current first character =",s[index],"at index",index);
        // console.log("Current last character =",curChar,"at index",index+windowLength-1);
        // console.log("Current substring:",s.substring(index,index+windowLength))
        if (charSet.has(curChar)) {
            // console.log("Duplicate found");
            
            /* We didn't need the if block below - we always need to remove the first character in the window 
            if there's a duplicate; this process will repeat itself as long as we have a duplicate */
            // if (s[index] !== curChar) { // Character at start of window is NOT a duplicate of the newly added character at the end of the window
                // console.log("Removing",s[index]);
                charSet.delete(s[index]);
            // }
            windowLength--; // Shrink the window
            index++; // Changes the starting index of the window
        } else {
            charSet.add(curChar); // Add the non-duplicate character
            // Now is the current window the biggest window with no duplicates we've found?
            if (windowLength > longestLength) {
                longestLength = windowLength;
            }
            windowLength++; // Expand the window
        }

    }
    return longestLength;

    /* INCORRECT code from office hour below */

    // let charSet = new Set(); // Hold all the characters in the window
    // let longestLength = 0; // Will hold the length of the longest substring we find
    // let index = 0; // Index where the window starts
    // let windowLength = 1; // How big the window is right now
    // while (index + windowLength <= s.length) {
    //     let curChar = s[index + windowLength - 1]; // Get newest character
    //     if (charSet.has(curChar)) {
    //         if (s[index] !== curChar) { // Character at start of window is NOT a duplicate of the newly added character at the end of the window
    //             charSet.delete(curChar);
    //             windowLength--; // Shrink the window
    //         } else {
    //             windowLength++;
    //         }
    //         index++; // Changes the starting index of the window
    //     } else {
    //         charSet.add(curChar); // Add the non-duplicate character
    //         // Now is the current window the biggest window with no duplicates we've found?
    //         if (windowLength > longestLength) {
    //             longestLength = windowLength;
    //         }
    //         windowLength++; // Expand the window
    //     }

    // }
    // return longestLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"));