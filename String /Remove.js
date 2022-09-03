const string = (N, str) => {
    let st = ""
    for(let i=0; i<N; i++){
        if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 90){
            continue
        }
        else st += str[i]
    }
    console.log(st)
}

string(5, "MasAi")