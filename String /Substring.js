const subString = (str) => {
    let count = 0 
    for(let i=0; i<str.length; i++){
        let st = ""
        for(let j=i; j<str.length; j++){
            st += str[j]
            if(st[0] == st[st.length - 1]) count++
            
            console.log(st)
        }
    }
    console.log(count )
}

subString("abcab")