const solve = (N, arr) => {
    if(N <= 0) return 0 
    return solve(N-1,arr) + arr[N-1]
}

console.log(solve(5, [6, 3, 8, 2, -4]))