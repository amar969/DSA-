const solve = (arr) => {
    let indexCounter = 0 
    for(let i=0; i<nums.length; i++){
        if(nums[i] != nums[i-1]){
            nums[indexCounter] = nums[i]
            indexCounter++
        }
    }
    return indexCounter
}

solve([1,1,2])