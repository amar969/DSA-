// Simple Question is to print the arr elements - Let see the mulitple way of it

// 1st 
const solve = (arr) => {
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

solve([3,4,5,6,7])

console.log("----")

// 2nd way
const solve1 = (arr) => {
    arr.map(x => console.log(x))
}

solve1([3,4,5,6,7])