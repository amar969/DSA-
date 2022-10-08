// common array element in both the arrays 

const solve = (N, arr1, arr2) => {
    let ans = 0
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(arr1[i] == arr2[j]) ans = arr2[j]
        }
    }
    console.log(ans)
}

solve(3, [4, 5, 7], [9, 2, 5])


const solve1 = (N, arr1, arr2) => {
    let ans = 0
    let l = 0 
    let r = N-1 
    while(l < N && r < N){
        if(arr1[l] == arr2[r]){
            ans = arr1[l]
            return
        }
        else if (arr1[l] > arr2[r]){
            l++
        }
        else r--
    }
    console.log(ans)
}

solve(3, [4, 5, 7], [9, 2, 5])

