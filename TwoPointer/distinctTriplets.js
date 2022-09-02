// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

let nums = [-1,0,1,2,-1,-4]
const Trip = (nums) => {
    for(let i=0; i<nums.length-2; i++){
        let l = i+1
        let r = i+2
        while(l < r){
            let sum = nums[i] + nums[l] + nums[r] 
            console.log( nums[i] , nums[l] , nums[r]  , sum)
            if( sum == 0) return [i, l ,r]
            else if (sum > 0) r--
            else l++
        }
    }
    return false
}

console.log(Trip(nums))