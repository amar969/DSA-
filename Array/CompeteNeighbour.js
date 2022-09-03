const CompeteN = (N, arr) => {
    let count = 0 
    for(let i=0; i<N; i++){
        if(i == 0){
            if(arr[i] > arr[i+1]) count++
        }
        else if( i == N-1) {
            if(arr[i] > arr[i-1]) count++
        }
        else if (arr[i] > arr[i+1] && arr[i] > arr[i-1]) count++
    }
    console.log(count)
}

CompeteN(8, [1, 2, 3, 4, 2, 1, 6, 5])