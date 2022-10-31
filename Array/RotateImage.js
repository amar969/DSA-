const solve = (arr) => {

    let n = arr.length

    const transpose = (arr) => {
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                let temp = arr[j][i]
                arr[j][i] = arr[i][j]
                arr[i][j] = temp
            }
        }
    }

    const rotate = (arr) => {
        for(let i=0; i<n; i++){
            for(let j=0; j<n/2; j++){
                let temp = arr[i][j]
                arr[i][j] = arr[i][n-1-j]
                arr[i][n-1-j] = temp
            }
        }
    }


    transpose(arr)
    rotate(arr)
    console.log(arr)
}

solve(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
)