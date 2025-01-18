function findLongestConsecutiveSequence(arr) {
    if (arr.length === 0) return 0; // Handle edge case for empty array

    let numSet = new Set(arr); // Use a set for O(1) lookups
    let longestStreak = 0;

    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the longest streak
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage
const numbers = [100, 4, 200, 1, 3, 2];
console.log("The longest consecutive sequence is:", findLongestConsecutiveSequence(numbers));
