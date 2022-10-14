const solve = (N, arr1, arr2) => {
    let a = {}
    let b = {}
    for(let i=0; i<N; i++){
        if(a[arr1[i]]) a[arr1[i]]++
        else a[arr1[i]] = 1
    }

    for(let i=0; i<N; i++){
        if(b[arr2[i]]) b[arr2[i]]++
        else b[arr2[i]] = 1
    }

   if(JSON.stringify(a) === JSON.stringify(b)) return 1
   else return 0
}

solve(5, [1,2,5,4,0], [2,4,5,0,1])
solve(3,[1,2,5], [2,4,15])


// best way 

const solve1 = (N, A, B) => {
    A = A.sort(function(a,b) {return a-b})
        B = B.sort(function(a,b) {return a-b})
        
        for(let i=0; i<N; i++){
            if(A[i] != B[i]) return false
        }
        
        return true
}
