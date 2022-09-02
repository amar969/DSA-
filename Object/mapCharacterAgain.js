const mapChar = (N) => {
    let str = "abcdefghijklmnopqrstuvwxyz"
    let obj = {}
    for(let i=0; i<str.length; i++){
        obj[str[i]] = N
        N++
    }
    console.log(obj)
}

mapChar(30)