const solve = (arr, n) => {
    let count = 0 
    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=i+2; k<=n; k++){
                if(arr[i] + arr[j] + arr[k] == 0) count++
            }
        }
    }
    return count
}

console.log(solve([0, -1, 2, -3, 1], 5))