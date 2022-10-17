const solve = (nums) => {
    let count = 0
    for(let i=0; i<nums.length; i++){
        let temp = nums[i]
        let dig_len = 0
        while(temp > 0){
            //temp %= 10
            dig_len++
            temp = parseInt(temp / 10)
        }
        // dig_len => is count of each digit
        if(dig_len % 2 == 0) count++
        // we are checking the legnth is even or odd
    }
    console.log(count)
}

solve([12,345,2,6,7896])
solve([555,901,482,1771])