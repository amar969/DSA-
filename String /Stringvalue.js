const stringValue = (str) => {
    let  s = "abcdefghijklmnopqrstuvwxyz"
    let sum = 0
    for(let i=0; i<s.length; i++){
        for(let j=0; j<str.length; j++){
            if(s[i] == str[j]) sum += i+1
        }
    }
   console.log(sum)
}

stringValue("aba")