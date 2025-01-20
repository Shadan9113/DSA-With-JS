function findLongestWord(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");
    let longestWord = "";

    // Iterate through each word
    for (let word of words) {
        // Check if the current word is longer than the longestWord
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Example usage
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Longest word:", findLongestWord(sentence));
