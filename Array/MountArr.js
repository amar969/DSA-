const solve = (arr) => {
    let N = arr.length
    let i = 0 

    while( i < N && arr[i] < arr[i+1]) i++ 
    
    if(i == 0 || i == N - 1) return false

    while( i < N && arr[i] > arr[i+1] ) i++ 
    
    return i == N - 1
}

console.log(solve([0,3,2,1]))