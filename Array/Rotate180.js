const solve = (N, arr) => {

    for(let i=N-1; i>=0; i--){
        let s = ""
        for(let j=N-1; j>=0; j--){
            s += arr[i][j] + " "
        }
        console.log(s)
    }
}

solve(
    3, 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
)