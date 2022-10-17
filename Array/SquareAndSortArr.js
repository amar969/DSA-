const solve = (nums) => {
    let ans = []
    for(let i=0; i<nums.length; i++){
        ans.push(nums[i] ** 2)
    }
    ans.sort(function(a,b) {return a-b})
    console.log(ans)
}

solve([-4,-1,0,3,10])