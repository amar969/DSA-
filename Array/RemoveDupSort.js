const solve = (arr) => {
    let ans = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] == arr[i-1]) continue
        else ans.push(arr[i])
    }
    console.log(ans)
}

solve([1,1,2])
solve([0,0,1,1,1,2,2,3,3,4])


const solve1 = (arr) => {
    let i = 0
    let j = 0 

    while(i < arr.length){
        if(arr[i] == arr[j]){
            arr.splice(i, 1)
            i++ 
            j++
        }
        else{
            i++
            j++
        }
    }
    return arr
}

console.log(solve1([1,1,2]))
console.log(solve1([0,0,1,1,1,2,2,3,3,4]))
