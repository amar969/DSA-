// if sum of pairs is equal to K 

arr = [7, 4, 9, 6, 21, 8, 11, 17]
N = 8 
K = 16 

// First Approach -> Brute force approach 
const PairSum = (arr, N, K) => {
    for(let i=0; i<N; i++){
        for(let j=i+1; j<N-1; j++){
            if(arr[i] + arr[j] == K) return true
        }
    }
    return false
}

console.log(PairSum(arr, N, K))

// Time Complexity here is O(N ^ 2)

// Second Approach -> Two Pointer. 

// 1. Sort the array 
// 2. two pointer technique 

const twoPointer = (arr, N, K) => {
    arr = arr.sort(function(a,b) {return a - b})
    let sum = 0 
    let l = 0 
    let r = N - 1
    while(l < r){
        sum = arr[l] + arr[r]
        if(sum == K) return true
        else if (sum > K) r-- 
        else l++
    }
    return false
}

console.log(twoPointer(arr, N, K))