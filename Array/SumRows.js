const sumRow = (N, M, arr) => {
    for(let i=0; i<N; i++){
        let sum = 0
        for(let j=0; j<M; j++){
            sum += arr [i][j]
        }
        console.log(sum)
    }
}

sumRow(3,2,[[1,2],[3,4],[5,6]])