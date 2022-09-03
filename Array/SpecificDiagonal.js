const specific = (N, M, arr, K) => {
    let p = 0 
    let q = 0 
    for(let i=0; i<N; i++){
        let flag = 0
        for(let j=0; j<M; j++){
            if(arr[i][j] == K){
                p = i 
                q = j 
                flag = 1
                break
            }
        }
        if(flag == 1) break
    }

    console.log(p, q)
    let x1 = p, y1 = q
    while(x1 > 0 && y1 > 0){
        console.log(x1, y1)
        x1-- 
        y1-- 
        
    }

    console.log("---")

    let x2= p
    let y2= q 
    while(x2 > 0 && y2 < M -1){
        console.log(x2, y2)
        x2-- 
        y2++
    }

    console.log("----")
    
    let s1 = ""
    let s2 = ""
    while(x1 <= N - 1 && y1 <= M - 1 ){
        s1 += arr[x1][y1] + " "
        console.log(s1)
        x1++
        y1++
    }

    console.log("----")

    while(x2 <= N -1 && y2 >= 0){
        console.log(s2)
        s2 += arr[x2][y2] + " "
        x2++
        y2--
    }
    console.log(s2)
    //console.log(s1)
    
}

specific(
    3, 3, [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
    5
)