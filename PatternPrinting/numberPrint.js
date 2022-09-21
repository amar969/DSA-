const solve = (N) => {
    let a = 1
    for(let i=1; i<=N; i++){
        let and = ""
        for(let j=0; j<=i; j++){
            and += a + " "
            a++
        }
        console.log(and)
    }
}

solve(4)