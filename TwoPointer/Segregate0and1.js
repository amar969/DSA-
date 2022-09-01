arr = [1,1,0,0,0,1,1,0,0,1,0,0,0]
N = arr.length 

const seg = (arr, N) => {
    let l = 0 
    let r = N - 1
    while(l < r){

        while(arr[l] == 0 && l < r)  l++

        while(arr[r] == 1 && l < r) r--


        // Exchange left and right if we 1 at left and 0 at right
        if(l < r){
            arr[l] = 0 
            arr[r] = 1
            l++
            r--
        }
    }
    return arr 
}

console.log(seg(arr, N))

