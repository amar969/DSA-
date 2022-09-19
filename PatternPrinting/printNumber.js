const solve = (N) => {
    for(let i=0; i<N; i++){
        let final = ""
        for(let j=0; j<=i; j++){
            final += i
        }
        console.log(final)
    }
}

solve(5)