// Array with Multiple Test cases, and an added value

const solve = (n, k, arr) => {
    for(let i=0; i<n; i++){
        arr[i] += k
    }
    console.log(arr)
}

solve(3,2, [1,2,3])


const solve1 = (n, arr) => {
    for(let i=0; i<n; i++){
        arr[i] += 1
    }
    console.log(arr)
}

solve1(5, [1,2,3,4,5])