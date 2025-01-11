function findMinNumber(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array case
    }

    let min = arr[0]; // Assume the first number is the smallest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if a smaller number is found
        }
    }
    return min;
}

// Example usage
const numbers = [12, 45, 2, 9, 78, 34];
console.log("The minimum number is:", findMinNumber(numbers));
