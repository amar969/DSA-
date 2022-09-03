const mapChar = (N, str1, K) => {
    let str = "abcdefghijklmnopqrstuvwxyz"
    let sum = 0
    for(let i=0; i<str.length; i++){
        for(let j=0; j<str1.length; j++){
            if(str[i] == str1[j]) sum += i+1
        }
    }
    
    if(sum >= K) return true 
    else return false
    
}

console.log(mapChar(6, "nrupul", 45))