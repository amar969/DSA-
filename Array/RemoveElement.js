const solve = (nums, val) => {
    let n = nums.length - 1
    for(let i=0; i<n; i++){
        if(nums[i] == val){
            nums.splice(i, 1)
            i--
        }
    }
    
    return nums.length
}

console.log(solve([3,2,2,3], 3))
console.log(solve([0,1,2,2,3,0,4,2],2))
console.log(solve([1], 1))
console.log(solve([3,3], 3))