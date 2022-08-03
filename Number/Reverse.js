// Q. Reverse the values -- without converting it to or using +, -

const number = (N) => {
    let temp = ""
    while(N > 0){
        temp += N % 10
        N = parseInt(N / 10)
    }
    console.log(temp)
}
number(971)

// Q. Reverse the values

const rev = (N) => {
    let re = ""
    N = N.toString()
    for(let i=N.length-1; i>=0; i--) re += N[i]
    console.log(re)
}

rev(632)