const solve = (N,s) => {

    str = []

    for(let i=0; i<s.length; i++){
        str.push(s[i])
    }

    str.sort()
    
    let f = {}
    for(let i=0; i<N; i++){
        if(f[str[i]] == undefined) f[str[i]] = 1 
        else f[str[i]]++
    }

    for(let key in f){
        console.log(key + "-" + f[key])
    }
}

solve(
    4, "aman"
)