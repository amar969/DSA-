const solve = (str1, str2) => {
    let a = ""
    for(let i=0; i<str1.length; i++){
        if(str1 != " ") a += str1[i]
        else continue
    }

    let b = ""
    for(let i=0; i<str2.length; i++){
        if(str2 != " ") b += str2[i]
        else continue
    }

    a = a.split("").sort().join()
    b = b.split("").sort().join()
    console.log(a)
    console.log(b)
}

solve("anagram", "nag a ram")