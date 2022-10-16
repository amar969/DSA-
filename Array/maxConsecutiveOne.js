const solve = (nums) => {
    let count = 0 
    let r = 0 
    for(let i=0; i<nums.length; i++){
        
        if(nums[i] == 1) {
            r++
            console.log(nums[i], i, r)
        }
        else if(nums[i] != 1){
            if(r > count) count = r
            r = 0
        }
        if(r > count) count = r
    }
    console.log(count)
}

// output = 3

solve([1,1,0,1,1,1])