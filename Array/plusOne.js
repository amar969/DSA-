const solve = (digits) => {
    let final = []
    for(let i=0; i<digits.length; i++){
        
        if(i == digits.length - 1){
            if(digits[i] == 9) {
                final.push(1)
                final.push(0)
            }
            else final.push(digits[i] + 1)
        }
        else final.push(digits[i])
        
    }
    return final
}

console.log(solve([1,2,3]))
console.log(solve([9]))
console.log(solve([9, 9]))