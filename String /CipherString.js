const solve = (N, str) => {
    let ans = {}
    let count = 1
    for(let i=0; i<N; i++){
       if(ans[str[i]] == undefined) {
           ans[str[i]] = count
       }
       else if(ans[str[i]]) {
          
          count++
       }
    }
    console.log(ans)
}

solve(5, "aabcc")
solve(5, "aazaa")


