const solve = (N,K, arr) => {
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(arr[j] % K > arr[j+1] % K){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}

solve(5,6,[12,18,17,65,46])