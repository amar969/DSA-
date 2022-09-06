const solve = (str) => {
    let ans = []
    for(let i=0; i<str.length; i++){
        if(str[i] == "#") ans.pop()
        else ans.push(str[i])
    }
    console.log(ans.join(""))
}

solve("ab#d")
solve("a#bc")