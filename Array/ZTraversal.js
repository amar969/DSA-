const zTraversal = (N, arr) => {
    let s = ""
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(i == 0 || i == N - 1){
                s += arr[i][j] + " "
            }
            else if (i+j == N-1){
                s += arr[i][j] + " "
            }
            
        }
    }
    console.log(s)
}

zTraversal(
    3, 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
)