const solve = (N,K, arr) =>{
    arr = arr.sort(function(a,b) { return a-b})
    let l = 0 
    let r = N - 1
    let max = -1 
    while(l < r){
        sum = arr[l] + arr[r]
        if(sum < K){
            if(sum > max) max = sum
            l++
        }
        else{
            r--
        }
    }
    console.log(max)
}

solve(5, 7, [1, 2, 3, 4, 5])
solve(3, 15, [30, 10, 20])