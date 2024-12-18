const recursiveFactoriall = (n) => {

        if(n === 0){
            return 1;
        }
        return  n * recursiveFactoriall(n-1)
}
console.log(recursiveFactoriall(5));
