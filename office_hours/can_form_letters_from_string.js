// From LeetCode: 383. Ransom Note challenge
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteFreq = {};
    let magazineFreq = {};
    // Go through each character in the ransom note
    for (let curChar of ransomNote) {
        // If the character was already found before
        if (curChar in ransomNoteFreq) {
            ransomNoteFreq[curChar]++; // Increment its frequency
        } else { // The character is new
            ransomNoteFreq[curChar] = 1; // Set its frequency to one
        }
        // console.log("Random note frequency:");
        // console.log(ransomNoteFreq);
    }
    // Go through each character in the magzine
    for (let curChar of magazine) {
        // If the character was already found before
        if (curChar in magazineFreq) {
            magazineFreq[curChar]++; // Increment its frequency
        } else { // The character is new
            magazineFreq[curChar] = 1; // Set its frequency to one
        }
        // console.log("Magazine frequency:");
        // console.log(magazineFreq);
    }
    // Loop through the ransom note frequency hash map (object) and see if each character appears in the magazine frequency, and if so, does it appear enough times?
    for (let curChar in ransomNoteFreq) {
        // If we can't find the current charcter in the magazine, OR it doesn't appear enough times in the magazine
        if (!magazineFreq.hasOwnProperty(curChar) || magazineFreq[curChar] < ransomNoteFreq[curChar]) {
            return false;
        }
    }
    return true; // Every character in the note found, and appears enough times
};