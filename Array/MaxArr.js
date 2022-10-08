const solve = (arr) => {
    let max = - Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max) max = arr[i]
    }
    console.log(max)
}


const solve1 = (arr) => {
    let max = -Infinity
    arr.map((x) => x > max ? max = x : "" )
    console.log(max)
 }


solve([1,2 ,3 ,4 ,5])
console.log("------")
solve1([1,2 ,3 ,4 ,5])