const solve = (n,k, arr) => {
    let l = 0 
    let r = n-1 
    let p = -1 
    let q = -1
    while(l < r){
        let sum = arr[l] + arr[r]
        console.log(sum)
        if(sum == k) {
            p = l
            q = r
            return (p + " " + q)
        }
        else if(sum > k) r-- 
        else l++
    }

    return (p + " " + q)
}

console.log(solve(4,9,[2,7,11,15]))

// two sum is array is not sorted

const solve1 = (nums, target) => {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target) return [i, j]
        }
    }
}

console.log(solve1([2,7,11,15], 9))