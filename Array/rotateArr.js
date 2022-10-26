const solve = (nums, k) => {

    // let i = 0
    // let j = nums.length - 1

    // if(nums.length == 1) return nums

    // i = 0 
    // j = nums.length - 1
    // if(nums.length == 2){
    //     while(k > 0){
    //         while(i < j){
    //             let temp = nums[i]
    //             nums[i] = nums[j]
    //             nums[j] = temp
    //             i++
    //             j--
    //         }
    //         k--
    //     }
    //     return nums
    // }

    // while(i < j){
    //     let temp = nums[i]
    //     nums[i] = nums[j]
    //     nums[j] = temp
    //     i++
    //     j--
    // }

    // i = k
    // j = nums.length - 1 
    // while(i < j){
    //     let temp = nums[i]
    //     nums[i] = nums[j]
    //     nums[j] = temp
    //     i++ 
    //     j--
    // }

    // i = 0
    // j = k -1
    // while(i < j){
    //     let temp = nums[i]
    //     nums[i] = nums[j]
    //     nums[j] = temp
    //     i++
    //     j--
    // }

    

    // console.log(nums)
   let length = nums.length
   let res = [...nums]

   for(let i=0; i<length; i++){
       let index = (i + k) % length
        console.log(nums[index] + " - " + res[i] )
       nums[index] = res[i]
   }
   //return nums
}

console.log(solve([1,2,3,4,5,6,7], 3))
console.log(solve([1,2],3))