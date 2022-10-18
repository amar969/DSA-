const solve = (arr, val) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == val){
            arr.slice(i, 1)
            i--
        }
    }
    console.log(arr)
}

solve([2,3,2,3,], 3)