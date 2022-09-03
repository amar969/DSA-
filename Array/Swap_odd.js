const swapOdd = (N, str) => {
    for(let i=0; i<N; i++){
        if(i % 2 == 0){
            temp = str[i]
            str[i] = str[i+1]
            str[i+1] = temp
        }
    }
    console.log(str)
}

swapOdd(6, ["A", "B", "C", "D", "E", "F"])