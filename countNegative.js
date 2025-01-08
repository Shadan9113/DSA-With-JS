function countNegativeNumbers(arr) {
    let count = 0; // Initialize a counter for negative numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++; // Increment the counter if the number is negative
        }
    }
    return count;
}

// Example usage
const numbers = [12, -45, 2, -9, 78, -34];
console.log("The number of negative numbers is:", countNegativeNumbers(numbers));
