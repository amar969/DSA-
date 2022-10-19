const solve = (arr) => {
    let great = -1

    if(arr.length == 1) {
       arr[0] = great
       return arr
    }

    for(let i=arr.length; i>1; i--){
        if(arr[i] > great) great = arr[i]
        arr[i] = great
    }
    arr.splice(0, 1)
    return arr
}

console.log(solve([17,18,5,4,6,1]))
console.log(solve([400]))