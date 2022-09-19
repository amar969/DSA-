const solve = (N) => {
    for(let i=N; i>0; i--){
        let final = ""
        for(let j=1; j<=i; j++){
            final += j
        }
        console.log(final)
    }
}

solve(5)