const solve = (N, arr1, arr2) => {
    let l = 0 
    let r = N - 1 
    let count = 0 
    while(l < N && r >= 0 ){
        if(arr1[l] == arr2[r]) {
            count++
            l++
            r-- 
        } 
        else if(arr1[l] > arr2[r]) r--
        else if(arr2[r] > arr1[l]) l++
    }
    console.log(count)
}

solve(6, [1, 2, 2, 3, 4, 5],[4, 4, 3, 2, 1, 1])