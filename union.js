function findUnion(arr1, arr2) {
    let union = []; // Array to store the union
    let elements = {}; // Object to track seen elements

    // Add elements of arr1 to the union
    for (let i = 0; i < arr1.length; i++) {
        if (!elements[arr1[i]]) {
            union.push(arr1[i]);
            elements[arr1[i]] = true; // Mark as seen
        }
    }

    // Add elements of arr2 to the union
    for (let j = 0; j < arr2.length; j++) {
        if (!elements[arr2[j]]) {
            union.push(arr2[j]);
            elements[arr2[j]] = true; // Mark as seen
        }
    }

    return union;
}

// Example usage
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log("Union of arrays:", findUnion(array1, array2));
