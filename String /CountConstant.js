const countConst = (str) => {
    let count = 0 
    for(let i=0; i<str.length; i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "o" || str[i] == "i" || str[i] == "u") continue
        else count++
    }
    console.log(count)
}

countConst("masaischool")