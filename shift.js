const shiftArray = (arr, positions, direction = "right") => {
    const length = arr.length;

    // Normalize the number of positions to prevent unnecessary shifts
    const shift = positions % length;

    if (direction === "right") {
        // Right shift
        return arr.slice(-shift).concat(arr.slice(0, -shift));
    } else if (direction === "left") {
        // Left shift
        return arr.slice(shift).concat(arr.slice(0, shift));
    } else {
        throw new Error("Invalid direction. Use 'left' or 'right'.");
    }
};

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log("Right Shift by 2:", shiftArray(numbers, 2, "right")); // Output: [4, 5, 1, 2, 3]
console.log("Left Shift by 2:", shiftArray(numbers, 2, "left"));  // Output: [3, 4, 5, 1, 2]
