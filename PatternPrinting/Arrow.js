const solve = (N) => {
    for(let i=0; i<N; i++){
        let final = ""
        for(let j=0; j<=i; j++){
            final += "*"
        }
        console.log(final)
    }

    for(let i=0; i<N; i++){
        let final = ""
        for(let j=N; j>i; j--){
            final += "*"
        }
        console.log(final)
    }

}

solve(5)