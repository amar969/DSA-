const solve1 = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0) console.log(arr[i])
    }
}

const solve = (arr) => {
    arr.filter(x => x % 2 == 0 ? console.log(x) : "")
}

const solve3 = (arr) => {
    let even = arr.reduce(function(acc, cur){
        if(cur % 2 == 0 ) acc.push(cur)
        return acc
    }, [])
    console.log(even)
}

const solveOdd = (arr) => {
    let odd = arr.reduce(function(acc, cur) {
        cur % 2 != 0 ? acc.push(cur) : "" 
        return acc 
    }, [])
    console.log(odd)
}

solve([1,2,3,4,5])
solve1([1,2,3,4,5])
solve3([1,2,3,4,5])
solveOdd([1,2,3,4,5])