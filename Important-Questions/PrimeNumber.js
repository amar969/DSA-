// Detect if a number is prime

const checkPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
        console.log(i, num)
    if(num % i === 0) return false; 
    }
    return num > 1;
}

console.log(checkPrime(15))
console.log(checkPrime(12))
console.log(checkPrime(9))
console.log(checkPrime(7))
console.log(checkPrime(11))
console.log(checkPrime(17))

// Steps 
// num = 15
// s = 3 (Sqrt and floor value of 15)
// 15 % 3 == 0 return false

// num = 7 
// s = 2 ( sqrt and floor value of 7 )
// 7 % 2 !=  0 return true

// Time Complexity $O(Sqrt(N))

