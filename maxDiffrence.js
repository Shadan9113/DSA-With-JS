function findMaxDifference(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements for a valid difference
    }

    let minElement = arr[0];
    let maxDifference = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        // Calculate the difference between the current element and the minimum so far
        let difference = arr[i] - minElement;
        // Update the maximum difference
        if (difference > maxDifference) {
            maxDifference = difference;
        }
        // Update the minimum element
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }

    return maxDifference === -Infinity ? 0 : maxDifference; // Return 0 if no positive difference
}

// Example usage
const numbers = [2, 3, 10, 6, 4, 8, 1];
console.log("The maximum difference is:", findMaxDifference(numbers));
