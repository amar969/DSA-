const battleOdd = (N, arr) => {
    let evn = 0 
    let odd = 0 
    for(let i=0; i<N; i++){
        if(arr[i] % 2 == 0) evn += arr[i]
        else odd += arr[i]
    }
    if(evn > odd) console.log("Even")
    else console.log("Odd")
}

battleOdd(4, [1,2,3,4])