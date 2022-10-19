const solve = (arr) => {
    let j = 1 
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] == 0 ){
            arr.push(0)
            arr.splice(i, 1)
        }
    }
    console.log(arr)
}

solve([0,1,0,3,12])