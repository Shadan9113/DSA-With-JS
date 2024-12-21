function returnDuplicate(arr){
    let seen = {};
    let duplicates = [];

    for(let item of arr){
        if(seen[item]){
            duplicates.push(item)
        }else{
            seen[item] = true;
        }
    }
    return duplicates;
}
console.log(returnDuplicate([1,3,4,3,2,4,6,7,8,1]))