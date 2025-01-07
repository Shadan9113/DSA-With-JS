function findSecondLargestNumber(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; // Update second largest
            largest = arr[i]; // Update largest
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]; // Update second largest
        }
    }

    return secondLargest === -Infinity ? null : secondLargest; // Handle cases with no distinct second largest
}

// Example usage
const numbers = [12, 45, 2, 9, 78, 34];
console.log("The second largest number is:", findSecondLargestNumber(numbers));
