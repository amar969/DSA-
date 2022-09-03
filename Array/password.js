const password  = (N, str) => {
    let res = ""
    for(let i=0; i<str.length; i++){
        if(str[i].includes("@") || str[i].includes("*") || str[i].includes("$") || str[i].includes("#")) res += "strong "
        else res += "weak "
    }
    console.log(res)
}

password(4,["test123", "new@t", "mon*y", "nrupul"])

