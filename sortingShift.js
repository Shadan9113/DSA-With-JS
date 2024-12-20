function sortingShift(arr) {
    let shiftCount = 0;
    for (let i = 1; i < arr.length; i++) { 
        let key = arr[i];
        let j = i - 1; 
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; 
            j--;
            shiftCount++; 
        }
        arr[j + 1] = key;
    }
    return { arr, shiftCount };
}

// Example usage
const arr = [1, 8, 4, 6, 3, 9];
const result = sortingShift(arr);
console.log(result); 
