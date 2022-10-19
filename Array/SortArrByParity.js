const solve = (arr) => {
   let l = 0 
   let r = 0
   while(r < arr.length){
        if(arr[r] % 2 == 0){
            console.log(arr[r])
            temp = arr[r]
            arr[r] = arr[l]
            arr[l] = temp
            l++ 
            r++
        }
        else r++ 
   }
    console.log(arr)
}

solve([3,1,2,4])
solve([0])