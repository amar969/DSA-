const solve = (num) => {
    let sum = 0 
    for(let i=1; i<=num; i++){
        let count = 0
        for(let j=1; j <= i; j++){
            if(i % j == 0) count++
            if(count > 2 ) break
        }
        if(count == 2) {
            sum += i
            }
        }
    console.log(sum)
}

solve(13)