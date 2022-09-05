const solve = (N, arr) => {
    if(Horizontal(N, arr) && vertical(N, arr)) console.log("Yes")
    else console.log("No")
}


const Horizontal = (N, arr) => {
    let l = 0 
    let r = N - 1 
    while(l < r){
        for(let i=0; i<N; i++){
            if(arr[l][i] != arr[r][i]) return false
        }
        l++
        r--
    }
    return true
}


const vertical = (N, arr) => {
    let l = 0 
    let r = N - 1 
    while(l < r){
        for(let i=0; i<N; i++){
            if(arr[i][l] != arr[i][r]) return false
        }
        l++
        r--
    }
    return true
}


solve(4, 
    [
    [ 0,1,0,1],
    [ 0,1,1,0],
    [0,1,1,0],
    [0,1,0,1],
    ]
    )

 solve( 4, 
   [
    [ 1,0,0,1],
    [0,0,0,0],
    [0,0,0,0],
    [1,0,0,1]
   ]
 )