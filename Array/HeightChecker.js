const solve = (arr) => {
    let ex = arr
    ex.sort(function(a,b) {return a-b})
    console.log(ex)
    console.log(arr)
    let count = 0 
    let l = 0 
    let r = 0 
    while(l < arr.length){
        if(arr[l] != ex[r]){
            count++ 
            l++ 
            r++ 
        }
        else{
            l++ 
            r++
        }
        console.log(l, r)
    }
    console.log(count)
}

solve([1,1,4,2,1,3])