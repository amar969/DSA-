const solve = (N) => {
    if(N == 0 || N == 1) return 1 

    return N * solve(N -1)
}

console.log(solve(5))