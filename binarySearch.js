function binarySearch(arr, target){
    let left = 0;
    let rigth = arr.length-1;
    while(left <= rigth){
        let mid = Math.floor((left+rigth)/2)
       
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            left = mid + 1;

        }else{
            rigth = mid - 1;
        }
    }
    return -1;
}
const arr = [1,3,2,4,5,6,7]
const target = 6;
const result = binarySearch(arr, target)

if(result !== 0){
    console.log(`Found ${target} at the index of ${result}`)
}else{
    console.log("Number not Found");
    
}