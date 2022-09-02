const evenSum = (N, M, arr) => {
    for(let i=0; i<N; i++){
        let ev = 0
        for(let j=0; j<M; j++){
            if(arr[i][j] % 2 == 0 )
            ev += arr[i][j]
        }
        console.log(ev)
    }
}

evenSum(3,3, [[1,2,3], [4,5,6], [7,8,9]])