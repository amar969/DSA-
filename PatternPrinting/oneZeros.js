const solve = (N) => {
    for(let i=0; i<N; i++){
        let final = ""
        for(let j=0; j<=i; j++){
            if(j % 2 != 0 && i % 2 != 0) final += "1"
            else final += "0"
        }
        console.log(final)
    }
}

solve(5)