const solveH = (N, M, K, arr) => {
   let count = 0
    for(let i=0; i<N; i++){
       let sum =  0 
       for(let j=0; j<M; j++){
            sum += arr[i][j]
            
       }
       if(sum == K) count++
   }
   
   for(let i=0; i<N; i++){
       let sum = 0
       for(let j=0; j<M; j++){
           sum += arr[j][i]
       }
       if(sum == K) count++
   }
   
   for(let i=0; i<N; i++){
       let sum = 0
       for(let j=0; j<M; j++){
           if(i == j || i+j == N){
               sum += arr[i][j]
            }
            
        }
        if(sum == K) count++
    }
    console.log(count)

}

solveH(
    3,3,6,[
        [3,2,1],
        [2,2,2],
        [1,5,1]
    ]
)