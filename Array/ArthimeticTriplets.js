const solve = (nums, diff) => {
    let count = 0 
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<=nums.length; k++){
                if(i < j < k){
                    if((nums[j] - nums[i] == diff) && (nums[k]-nums[j] == diff)) count++
                }
            }
        }
    }
    console.log(count)
}

//solve([0,1,4,6,7,10], 3)
//solve([4,5,6,7,8,9],2)

// faster approach 

const solve1 = (nums, diff) => {
    let count = 0 
    let hash = new Map()
    for(let i=0; i<nums.length; i++){
        let temp = nums[i] - diff
        // we are checking hash map have temp value and temp - diff, if yes we will increase the count
        if(hash.has(temp) && hash.has(temp - diff)) count++
        hash.set(nums[i])
    }
    return count
}


console.log(solve1([0,1,4,6,7,10], 3))
console.log(solve1([4,5,6,7,8,9],2))
