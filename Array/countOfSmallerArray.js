const solve = (arr, N, x) => {
    let count = 0 
    for(let i=0; i<N; i++){
        if(arr[i] < x) count++
    }
    return count
}

console.log(solve([1, 2, 4, 5, 8, 10], 6, 9))
