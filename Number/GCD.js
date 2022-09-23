const solve = (N1, N2) => {
    let i = 2 
    let num = - Infinity
    while(i < N1 || i < N2){
        if (N1 % i == 0 && N2 % i == 0 ) {
            num = Math.max(num, i)
            i++
        }
        else i++
    }
    return num
}

console.log(solve(4,8))
console.log(solve(3,6))
console.log(solve(5, 25))
