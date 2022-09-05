const solve = (N, w, arr) => {
    let sum = 0 
    let ans = 0 
    for(let i=0; i<w; i++){
        sum += arr[i]
    }
    if(sum > ans) ans = sum 

    for(let i=w; i<N; i++){
        sum -= arr[i-w]
        sum += arr[i]
        if(sum > ans) ans = sum
    }


    console.log(ans)

}

solve(
    10, 3, [-1, -1, -2, 1, -2, 4 ,1, 9, 3, 9
    ]
)