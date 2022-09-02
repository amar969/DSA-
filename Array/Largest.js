const small = (N, arr) => {
    let min = Infinity 
    let max  = -Infinity
    for(let i=0; i<N; i++){
        if(arr[i] < min) min = arr[i]
        if(arr[i] > max) max = arr[i]
    }
    console.log(min, max)
}

small(4, [-2, 0,8,4])