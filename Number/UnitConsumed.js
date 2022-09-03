const unitConsumed = (N) => {
    N -= 80 
    if(N <= 0) console.log(0)
    else if(N < 150) console.log(N/3)
    else if(N <= 650){
        N -= 150
        console.log(N/5 + 50)
    }
    else {
        N -= 650
        console.log(N/10 + 150)
    }
}

unitConsumed(930)