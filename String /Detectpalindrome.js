const solve = (n, str) => {
    let obj = {}
    for(let i=0; i<n; i++){
        if(obj[str[i]]) obj[str[i]]++
        else obj[str[i]]=1
    }

    let flag = 0

    for(let key in obj){
        if(obj[key] % 2 != 0) flag = 1
    }

    if(flag) console.log("Not Possible")
    else console.log("Possible")
}

solve(6, "aabbcc")
solve(5, "aabcd")