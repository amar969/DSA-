const solve = (N, K, X,  arr) => {
    let count = 0 

    let left = 0 
    let right = N - 1 
    while(left <= right){
        if(check(arr, left, right, K)) count++
        left ++ 
        right --
    }

    console.log(count)
}


const check = (arr, left, right, K) => {
    for(let i=left; i<right; i++){
        if(arr[i] > K) return false
    }
    return true
}

solve(5,3,2, [1, 3, 2, 5, 1])