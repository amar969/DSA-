const solve = (nums) => {
    nums.sort(function(a,b) {return b-a })
    let count = 1 
    let prevEle = nums[0] 

    for(let i=0; i<nums.length; i++){
        
        if(nums[i] != prevEle){
            count++
            prevEle = nums[i]
        }

        if(count == 3) return nums[i]
    }
    return nums[0]
}

console.log(solve([3,2,1])) //1
console.log(solve([1,2])) // 2