const Traver = (N, M, arr) => {
    let sum = ""
    for(let i=M-1; i>=0; i--){
        for(let j=0; j<N; j++){
            sum += arr[j][i] + " "
        }
    }
    console.log(sum)
}

Traver(4,3, [
    [1,8,9],
    [2,7,10],
    [3,6,11],
    [4,5,12]
])