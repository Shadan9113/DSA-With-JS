const number = [1,2,3,4,5,6];
const newNum = 3;
const position = 3;

for(let i = number.length-1; i>=position; i--){
    number[i+1]=number[i];
}
number[position] = newNum;
console.log(number)