const Trav = (N, M, arr) => {
    let sum = ""
    for(let i=0; i<N-1; i++){
        for(let j=M; j>=0; j--){
            sum += arr[j][i] + " "
        }
    }
    console.log(sum)
    
}

Trav(4,3,[
    [1,8,9],
    [2,7,10],
    [3,6,11],
    [4,5,12]
])