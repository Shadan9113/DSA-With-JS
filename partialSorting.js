
function partialInsertionSort(arr, k){
    for(let i=1; i<k; i++){
        let key = arr[i]
        let j = i-1;

        while(j>=0 && arr[j] > key ){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
const arr = [8, 5, 2, 7, 6, 3];
const k = 4;
console.log("Original array:", arr);
const result = partialInsertionSort(arr, k);
console.log("Partially sorted array:", result);