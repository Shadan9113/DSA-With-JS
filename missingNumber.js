function findMissingNumbers(arr, rangeStart, rangeEnd) {
    let missingNumbers = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
        // Check if the current number i is in the array
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            missingNumbers.push(i); // Add missing number to the result
        }
    }
    return missingNumbers;
}

// Example usage
const numbers = [1, 3, 5, 7, 9];
const rangeStart = 1;
const rangeEnd = 10;
console.log("Missing numbers:", findMissingNumbers(numbers, rangeStart, rangeEnd));
