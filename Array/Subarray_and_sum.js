const solve = (n, k, arr) => {
    let sum = 0 
    for(let i=0; i<n; i++){
        sum += arr[i]
    }

    if(sum % k !== 0 ) {
        console.log("1")
        return 
    }

    else{
        let l = -1, r = -1 
        for(let i=0; i<n; i++){
         if(arr[i] % k != 0) {
             l = i
             break
         }
        }

        if(l == -1) console.log("-1")
        else{
            let count =0 
            let sum = 0 
            let len = Math.max(n-1-l, r)
            for(let i=0; i<len; i++){
                sum += arr[i]
            }
            if(sum % k != 0) count++
            for(let i=len; i<n; i++){
                sum -= arr[i-k]
                sum += arr[i]
                if(sum % k != 0) count++
            }
            console.log(count)
        }
    }
}

solve(4,3,[2,3,4,6])