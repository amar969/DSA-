const sumArr = (N,M, arr) => {
    let sum = 0 
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            sum += arr[i][j]
        }
    }
    console.log(sum)
}

sumArr(
    3,2, [
        [1, 2],
        [3, 4], 
        [5, 6]
    ]
)

