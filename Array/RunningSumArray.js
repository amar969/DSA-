const solve = (N, arr) => {
    let ans = []
    let sum = 0 
    for(let i=0; i<N; i++){
        sum += arr[i]
        ans.push(sum)
    } 
    console.log(ans)
}

solve(5, [1,2,3,4,5])