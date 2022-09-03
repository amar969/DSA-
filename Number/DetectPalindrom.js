const Pal = (num) => {
    num = num.toString()
    let l = 0
    let r = num.length-1
    while(l < r){
        if(num[l] == num[r]){
            l++
            r--
        }
        else return "No"
    }
    return "Yes"
}

console.log(Pal(1221))