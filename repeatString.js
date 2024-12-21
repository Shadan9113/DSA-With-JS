function repeatString(str, num){
    if(num < 0){
        return '';
    }
    let result = '';
    for(let i = 0; i < num; i++){
        result += str;
    }
    return result;
}
console.log(repeatString("abc",4))