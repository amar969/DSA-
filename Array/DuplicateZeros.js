const solve = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            arr.pop()
            arr.splice(i+1, 0, 0)
            i++
        }
    }
    console.log(arr)
}

solve([1,0,2,3,0,4,5,0])