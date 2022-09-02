const mapCharacter = (n) => {
    let str = "abcdefghijklmnopqrstuvwxyz"
    let obj = {}
    for(let i=0; i<=n; i++){
        obj[str[i]] = i+1
    }

    for(let key in obj){
        console.log(key + "-" + obj[key])
    }
    
}

console.log(mapCharacter(5))