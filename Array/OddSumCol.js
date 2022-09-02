const OddSum = (n, m, arr) => {
    for(let i=0; i<n; i++){
        let sum = 0 
        for(let j=0; j<m; j++){
            if(arr[i][j] % 2 != 0) sum += arr[j][i]
        }
        console.log(sum)
    }
}

OddSum(
    3,3, [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
)