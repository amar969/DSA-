const solve = (N) => {
    for(let i=N; i>0; i--){
        let final = ""
        for(let j=0; j<i; j++){
            final += "*"
        }
        console.log(final)
    }
}

solve(5)