const Zig = (N, M, arr) => {
    let sum = ""
    for(let i=0; i<N; i++){
        if( i % 2 == 0){
            for(let j=M-1; j>0; j--){
                sum += arr[i][j] + " "
            }
        }
        else{
            for(let j=0; j<M; j++){
                sum += arr[i][j] + " " 
            }
        }
    }
    console.log(sum)
}

Zig( 5, 5, 
    [
        [4, 7, 1, 1, 7],
        [8 ,9 ,9 ,6 ,1],
        [6, 4, 9, 5, 1],
        [7, 7, 4, 7, 7],
        [8, 6, 2, 5, 5]
    ] )