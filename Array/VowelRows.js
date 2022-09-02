const vowelRows = (N, M, str) => {
    for(let i=0; i<N; i++){
        let flag = 0
        for(let j=0; j<M; j++){
            if(str[i][j] == "a" || str[i][j] == "e" || str[i][j] == "i" || str[i][j] == "o" || str[i][j] == "u") {
                flag = 1
                
            }
        }
        if(flag == 1) console.log("Yes")
        else console.log("No")
    }
}

vowelRows(3,2, [["a", "b"], ["c" , "d"] , ["e", "f"]])