const solve = (N, M, arr) => {
    for(let i=0; i<N-1; i++){
        let s1 = ""
        for(let j=0; j<=M; j++){
            s1 += arr[j][i] + " "
        }
        console.log(s1)
    }
    
}

solve(
    5, 4, 
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3],
        [4, 4, 4, 4]
    ]
)