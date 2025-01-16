function findPairsWithSum(arr, targetSum) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

// Example usage
const numbers = [2, 4, 3, 7, 5, 8];
const targetSum = 10;
console.log("Pairs with sum", targetSum, ":", findPairsWithSum(numbers, targetSum));
