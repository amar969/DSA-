const Sub = (S) => {
    let max = 0
    for(let i=0; i<S.length; i++){
        let str = ""
        for(let j=i; j<S.length; j++){
            str += S[j]
            let flag = 0
            for(let k=0; k<str.length; k++){
                if(str[k] != str[str.length - k - 1]) {
                    flag = 1
                    break
                }
            }
            if(flag == 0) {
                if(str.length > max) max = str.length
            }
        }
    }
    console.log(max)
}

Sub("thisracecarisgood")