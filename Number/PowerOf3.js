const solve = (n) => {
    if(n <= 0) return false

    while(n % 3 == 0){
        n /= 3 
    }

    if(n == 1) return true
    else return false
}

console.log(solve(27))
console.log(solve(0))
console.log(solve(-1))