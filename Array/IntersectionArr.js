// common array element in both the arrays 

const solve = (N, arr1, arr2) => {
    let ans = 0
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(arr1[i] == arr2[j]) ans = arr2[j]
        }
    }
    console.log(ans)
}

solve(3, [4, 5, 7], [9, 2, 5])


const solve1 = (N, arr1, arr2) => {
    let ans = []
    let l = 0 
    let r = N-1 
    while(l < N && r < N){
        if(arr1[l] == arr2[r]){
            ans.push(arr1[l])
            return
        }
        else if (arr1[l] > arr2[r]){
            l++
        }
        else r--
    }
    console.log(ans)
}

solve1(3, [4, 5, 7], [9, 2, 5])

const solve2 = (nums1, nums2) => {
    let ans = []
    for(let i=0; i<nums2.length; i++){
        let val = nums2[i]
        if(nums1.includes(val)) {
            let spval = nums1.splice(nums1.indexOf(val), 1)
            ans.push(val)
        }
    }
    
    return ans
}

console.log(solve2([1,2,2,1], [2,2]))
console.log(solve2([4,9,5], [9,4,9,8,4]))

