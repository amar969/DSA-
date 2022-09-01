const longestUnique = (s, n) => {
    let hm = {}
    let max_length = 0 
    let start = 0 
    for(let i=0; i<n; i++){
        if(hm[s[i]] == undefined) max_length = Math.max(max_length, i-start+1)
        else{
            start = Math.max(start, hm[i] + 1)
        }
        console.log(hm)
    }
    return max_length
}

console.log(longestUnique("abbcdeabb", 9))