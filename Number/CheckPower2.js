const solve = (N) => {
    if(N <= 0) return false 
    else{
        while( N % 2 == 0){
            N = N / 2
        }
    }
    if(N == 1) return true
    else return false
}

console.log(solve(98))