const solve = (nums) => {

    nums.sort(function(a,b) {return a-b})
    let ans = []
    let count = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] != nums[i-1]) {
            count++ 
            if(nums[i] != count) ans.push(count)
        }
        else if(nums[i] == nums[i-1]) continue
        console.log(count)
    }
    console.log(ans)
}

solve([4,3,2,7,8,2,3,1])
solve([1,1])