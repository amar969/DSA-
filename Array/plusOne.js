const solve = (digits) => {
    let res = digits.join("")
    res = BigInt(res) + 1
    return String(res).split("")
}

console.log(solve([1,2,3]))
console.log(solve([9]))
console.log(solve([9, 9]))
console.log(solve([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))