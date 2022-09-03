const Queue = (N, arr) => {
    let count = 1 
    for(let i=0; i<arr.length; i++){
        if(arr[i] < arr[i-1]) count++
    }
    console.log(count)
}

Queue(6, [1,2,4,3,5,8])