const Eq = (N, arr) => {
    for(let i=0; i<N; i++){
        if(arr[i] == 42) return "Yes"
    }
    return "No"
}

console.log(Eq(5, [3,7,0,9,8]))