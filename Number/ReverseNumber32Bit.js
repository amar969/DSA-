// reverse the number and if number is greater than 32 bit return 0

const solve = (x) => {
    let rev = Math.abs(x).toString().split("").reverse().join("")

    if(rev > 2 ** 31 - 1) return 0 
    return Math.sign(x) * rev
} 

console.log(solve(124))