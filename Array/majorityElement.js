const solve = (nums) => {
    let obj = {}
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]) obj[nums[i]]++
        else obj[nums[i]] = 1
    }
    let maj = nums.length / 2 

    let ans = 0
    for(let key in obj){
        console.log(key)
        if(obj[key] > maj) {
            ans = key
            return Number(ans)
        }
    }

}

console.log(solve([3,2,3]))