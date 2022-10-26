// prime number by - Sieve of Eratosthenes 

const solve = (n) => {
    if(n < 2) return false

    for(let i=2; i<n; i++){
        if(n % i == 0) return false
    }
    return true
}

console.log(solve(5))
console.log(solve(150))
console.log(solve(7))
console.log(solve(11))