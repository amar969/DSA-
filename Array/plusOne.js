const solve = (digits) => {
    let res = digits.join("")
    res = Number(res) + 1
    return String(res).split("")
}

console.log(solve([1,2,3]))
console.log(solve([9]))
console.log(solve([9, 9]))