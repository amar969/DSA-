const OddSum = (N, M, arr) => {
    
    for(let i=0; i<N; i++){
        let sum = 0
        for(let j=0; j<M; j++){
            if(arr[i][j] % 2 != 0) sum += arr[i][j]
        }
        console.log(sum)
    }

}

OddSum(3, 3, [[1,2,3], [4,5,6], [7,8,9]])