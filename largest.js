function findLargestNumber(arr) {
    let largest = arr[0]; // Assume the first number is the largest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if current number is greater
        }
    }
    return largest;
}

// Example usage
const numbers = [12, 45, 2, 9, 78, 34];
console.log("The largest number is:", findLargestNumber(numbers));
