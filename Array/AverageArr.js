const avgArr = (N, arr) => {
    let sum = 0 
    for(let i=0; i<N; i++){
        sum += arr[i]
    }
    console.log(Math.ceil(sum/N))
}

avgArr(4, [2,5,0,9])