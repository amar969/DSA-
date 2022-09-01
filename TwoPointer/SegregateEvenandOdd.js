// keep evens one side and odd to other side of the arr. Order doesn't matter. 


let arr = [ 19,13,14,16,12,21,18]
let l = 0 
let r = arr.length-1


const segregateEvenOdds = (arr) => {
//
while(l < r){
    while(arr[l] % 2 == 0 && l < r) l++
    
    while (arr[r] % 2 != 0 && l < r) r-- 

    if(l < r){
        let temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++;
        r--;
    }
}
    return arr 
}

console.log(segregateEvenOdds(arr))