const solve = (N) => {
    let sp = 0
    let st = 2*N
    for(let i=0; i<N; i++){
        let final = ""
        for(let j=0; j<sp; j++){
            final += " "
        }

        for(let j=1; j<st; j++){
            final += "*"
        }
        sp++
        st-=2
        console.log(final)
    }
}

solve(5)