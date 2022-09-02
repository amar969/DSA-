const checkP = (str) => {
    let l = 0 
    let r = str.length - 1
    while(l < r){
        if(str[l] != str[r]) return "No"
        else{
            l++
            r--
        }
    }
    return "Yes"
}

console.log(checkP("nrupul"))
console.log(checkP("naman"))