// Example 1 ------

const array = [1,2,3,4,5,6];

const findNumber = (number) => {
    for(let i=0; i<array.length; i++){
        if(array[i]===number){
            return array[i];
        }
    }
    return -1;
}
console.log(findNumber(9))

// Example 2--------

function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1
};

console.log(linearSearch([1,2,3,4,5],3));