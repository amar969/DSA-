const EvenSum = (N) => {
    let sum = 0
    for(let i=1; i<=N; i++){
        if( i % 2 == 0) sum += i
        console.log(sum)
    }
}

EvenSum(4)

const OddSum = (N) => {
    let sum = 0 
    for(let i=1; i<=N; i++){
        if( i % 2 != 0) sum += i
        console.log(sum) 
    }
}
OddSum(4)