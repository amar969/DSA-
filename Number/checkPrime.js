const solve = (N) => {
    let flag = 0 
    for(let i=2; i<N; i++){
        if(N % i == 0 ) flag = 1
    }
    if (flag == 1) console.log("Not Prime Number")
    else console.log("Prime Number")
}

solve(3)
solve(26)