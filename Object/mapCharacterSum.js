const mapChar = (N, K, str) => {
    let str1 = "abcdefghijklmnopqrstuvwxyz"
    let obj = {}
    for(let i=0; i<str1.length; i++){
        obj[str1[i]] = N
        N++        
    }
    //console.log(obj)

    let sum = 0 
    for(let i=0; i<K; i++){
        sum += obj[str [i]]
    }
    console.log(sum)
}

mapChar(30, 3, "abc")