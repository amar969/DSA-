const solve = (str) => {
    let obj = new Set()
    for(let i=0; i<str.length; i++){
        // if(obj[str[i]] == undefined) obj[str[i]] = 1 
        // else obj[str[i]]++
        obj.add(str[i])
    }
    let ans = ""
    for(let key of obj) ans += key
    console.log(ans)
}

solve("iloveprogramming")