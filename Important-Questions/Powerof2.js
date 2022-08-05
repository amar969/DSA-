const pow1 = (n) => {
    while(n % 2 == 0){
        n = n / 2
    }
    if(n == 1) console.log("Yes")
    else console.log("No")
}

pow1(5)
pow1(16)

// Optimize solution 
const pow = (n) => {
    return ( (n > 0) && (n & (n-1)) == 0)
}
console.log(pow(16))
console.log(pow(8))
console.log(pow(13))
console.log(pow(10))
