const solve = (arr, N) => {
    let ans = []
    for(let i=1; i<=N; i++){
        if(arr[i-1] == i) ans.push(arr[i-1])
    }
    return ans.length == 0 ? 0 : ans.join(" ")
}

console.log(solve([1, 335, 501, 170, 725, 479, 359, 963, 465, 706, 146, 12, 828 ], 13))

