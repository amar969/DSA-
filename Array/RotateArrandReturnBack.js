const solve = (N, K, arr) => {
    K = K % N
    let l = 0 
    let r = N - 1
    while(l < r){
        temp = arr[l]
        arr[l] = arr [r]
        arr[r] = temp
        l++
        r--
    }

    l = K
    r = N - 1
    while(l < r){
        temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++
        r--
    }

    l = 0
    r = K - 1 
    while(l < r){
        temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++
        r--
    }

   

    console.log(arr)

}

solve( 3,1, [1,2,3])