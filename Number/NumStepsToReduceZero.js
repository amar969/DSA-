const solve = (num) => {
    let count = 0 
    while(num > 0){
        if(num % 2 == 0) num = parseInt(num / 2)
        else num -= 1
        count++
    }
    return count
}

console.log(solve(14))


// Time Complexity = O(Log N)
// Space Complexity = O(1)

// 2nd Approach for the same problem using bitwise operator 

const solve1 = (num) => {
    let count = 0 
    while(num > 0){
        //console.log(String(num,2))
        if(num & 1 == 0) num >>= 1
        else num--
        count++
    }
    return count
}

console.log(solve1(14))