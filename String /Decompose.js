const Decompose = (str) => {
    let res = ""
    
    for(let i=1; i<str.length; i+=2){
        for(let j=0; j<str[i]; j++){
            res += str[i-1]
        }
    }
    console.log(res)
}
Decompose("a3b2")