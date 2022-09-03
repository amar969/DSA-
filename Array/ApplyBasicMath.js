const Math = (N, arr) => {
    let min = Infinity
    let ans = -1 
    for(let i=0; i<N; i++){
        let temp = 0 
        for(let j=0; j<N; j++){
            if(i != j) temp += arr[j]
        }
        if (temp % 7 == 0 && arr[i] < min){
            min = arr[i]
            ans = i
        }
    }
    console.log(ans)
}

Math(5, [14,7,8,2,4])