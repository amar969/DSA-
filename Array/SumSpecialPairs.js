const sumPair = (N, arr) => {
    let sum = 0 
    for(let i=0; i<N; i++){
        for(let j=i; j<N; j++){
            if(j > i){
               let prime = j - i 
               count = 0 
               for(let k=0; k<=prime; k++){
                   if(prime % k == 0) count++
               }
               if(count == 2) sum += Math.abs(arr[j] - arr[i])
            }
        }
    }
    console.log(sum)
}



sumPair(6, [1,2,3, 5,7,12])