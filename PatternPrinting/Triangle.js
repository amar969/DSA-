const solve = (N) => {
    let st = 1 
    let sp = N - 1
    for(let i=0; i<N; i++){
        let final = ""
        for(let j=1; j<=sp; j++){
            final += " "
        }

        for(let j=0; j<st; j++){
            final += "*"
        }

        st+=2 
        sp--
        console.log(final)
    }

}

solve(5)
