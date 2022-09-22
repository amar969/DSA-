const solve = (N) => {
    N = N.toString()
    let count = 0
    for(let i=0; i<N.length; i++){
        count++
    }
    console.log(count)
}

const solve1 = (N) => {
    let count = 0 
    while(N != 0){
        N = parseInt(N / 10)
        count++
    }
    console.log(count)
}

solve("12345")
solve("1234")