const vowelCount = (str) => {
    let vowel = 0 
    let constant = 0 
    for(let i=0; i<str.length; i++){
        if(str[i] == "a" || str[i] == "i" || str[i] == "e" || str[i] == "o" || str[i] == "u") vowel++
        else constant++
    }
    console.log(vowel, constant)
}

vowelCount("ankush")