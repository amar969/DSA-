// Count the longest increasing subarray 

// const solve = (n, arr) => {
//     let count = 0
//     for(let i=0; i<n; i++){
//         for(let j= i+1; j<n; j++){
//             if(arr[j] > arr[j-1]) count++
//             else break
//         }
//     }
//     console.log(count)
// }

const solve = (n, arr) => {
    let count = 0 
    let at = 1 
    for(let i=1; i<arr.length; i++){
        if(arr[i] > arr[i-1]) at++
        else{
            if(count < at) count = at
            at = 1
        }
    }
    if(count < at) count = at
    return count
}


console.log(solve(6, [1,2,1,2,3,1,2]))

