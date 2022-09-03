const Total = (N, price, q) => {
    let sum = 0 
    for(let i=0; i<N; i++){
        sum += price[i] * q[i]
    }
    console.log(sum)
}

Total(3,[100, 20, 40], [2,1,2])