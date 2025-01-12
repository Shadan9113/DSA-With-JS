function rotateArray(arr, steps) {
    if (arr.length === 0 || steps <= 0) {
        return arr; // Return the array as is for invalid cases
    }

    let n = arr.length;
    steps = steps % n; // Handle cases where steps > array length

    // Create the rotated array
    let rotated = [];
    for (let i = 0; i < n; i++) {
        rotated[(i + steps) % n] = arr[i];
    }

    return rotated;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const steps = 2;
console.log("Rotated array:", rotateArray(numbers, steps));
