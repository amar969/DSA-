const masai = (str) => {
    str = str.split(" ")
    let rev = " "
    for(let i=str.length-1; i>=0; i--){
        rev += str[i] + " "
    }
    console.log(rev)
}

masai("A Transformation in education")