const solve = (s) => {
    let res = 0 
    const sym = {
        "I" : 1, 
        "V" : 5, 
        "X" : 10, 
        "L" : 50, 
        "C" : 100, 
        "D" : 500, 
        "M" : 1000
    }

    for(let i=0; i<s.length; i++){
        let cur = sym[s[i]]
        let next = sym[s[i+1]]

        if(cur < next){
            res += next - cur 
            i++ 
        }

        else{
            res += cur
        }
    }

    return res
}

console.log(solve("MCMXCIV"))