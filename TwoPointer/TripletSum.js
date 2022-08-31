arr = [7, 4, 9, 6, 21, 8, 11, 17]
N = 8 
K = 33

const trip = (arr, N, K) =>{
    for(let i=0; i<N-2; i++){
        let l = i + 1 
        let r = N - 1 
        while(l < r){
            let sum = arr[i] + arr[l] + arr[r]
            if(sum == K) return true 
            else if(sum > K) r-- 
            else l++ 
        }
    }
    return false
}

console.log(trip(arr, N, K))

