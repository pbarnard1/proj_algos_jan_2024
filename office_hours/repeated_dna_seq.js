// LeetCode challenge: Finding repeated DNA sequences using the sliding window and hash map techniques
function findRepeatedDnaSequences(s) {
    let allSeqs = {}; // Object or hash map holding each *unique* 10-character sequence as a key
    let allRepeats = []; // Array holding all sequences that repeat
    // Here is the sliding window; note the -9 (NOT -10) below due to the window
    for (let k = 0; k < s.length - 9; k++) {
        // Define the window and extract the substring
        let currentSequence = s.substring(k, k+10); // Alternate approach: use .split(), then .join()
        if (allSeqs.hasOwnProperty(currentSequence)) { // Sequence already found from before
            allSeqs[currentSequence] += 1; // Add one to frequency
            if (allSeqs[currentSequence] == 2) { // ONLY if we've found it the second time do we add this sequence to the array
                allRepeats.push(currentSequence); // Add sequence to array
            }
        } else { // New sequence, so add it to the hash map (object)
            allSeqs[currentSequence] = 1; // Found this sequence once - all new
        }
    }
    return allRepeats;
};