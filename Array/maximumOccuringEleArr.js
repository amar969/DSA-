const solve = (N, arr) => {
    let obj = {}
    for(let i=0; i<N; i++){
        if(obj[arr[i]] == undefined) obj[arr[i]] = 1
        else obj[arr[i]]++
    }

    console.log(obj)

    let max = -Infinity
    for(let key in obj){
        if(obj[key] > max) max = key
    }
    console.log(max)
}

solve(
    5, 
    [0, 2, 0, 6, 9]
)