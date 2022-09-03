const countPair = (N,K, arr) => {
    let count = 0 
    for(let i=0; i<N; i++){
        for(let j=i+1; j<N; j++){
            if(arr[i] + arr[j] == K) count++
        }
    }
    console.log(count)
}


countPair(5, 9, [3, 0, 6, 2, 7])