// Sub-arr sum equal to k using the sliding window approach 

let arr = [1, 4, 20, 3, 10 , 5]
let K = 33 


const sliding = (arr, K) => {
    let windowSum = 0; high = 0 
    for(let low=0; low<arr.length; low++){
        while(windowSum < K && high < arr.length ){
            windowSum += arr[high]
            high++
        }

        if(windowSum == K) return true 

        windowSum = windowSum - arr[low]
    }
    return false 
}

console.log(sliding(arr, K))