function findUniqueElements(arr) {
    let unique = [];
    let elementCount = {};

    // Count occurrences of each element
    for (let num of arr) {
        elementCount[num] = (elementCount[num] || 0) + 1;
    }

    // Collect elements that appear only once
    for (let key in elementCount) {
        if (elementCount[key] === 1) {
            unique.push(Number(key));
        }
    }

    return unique;
}

// Example usage
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log("Unique elements:", findUniqueElements(numbers));
