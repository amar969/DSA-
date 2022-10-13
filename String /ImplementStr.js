// check in the given string is present in substring or not 

const solve = (s,x) => {
    for(let i=0; i<s.length; i++){
        let st = ""
        for(let j=i; j<s.length; j++){
            st += s[j]
            if(st == x) return i
        }
    }
    return -1
}

console.log(solve("GeeksForGeeks", "For"))