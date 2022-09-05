const solve = (N, M, arr) => {
    let count = 0
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            let temp = ""
            if(j < M-3){
                temp += arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i][j+3]
                if (temp == "saba") count++
                temp = ""
            }
            //console.log(temp)


            if(i < N - 3){
                temp += arr[i][j] + arr[i+1][j] + arr[i+2][j] + arr[i+3][j]
                if(temp == "saba") count++
                temp = ""
            }
            //console.log(temp )

            if(i < N -3 && j <M-3){
                temp += arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2] + arr[i+3][j+3]
                if(temp == "saba") count++
                temp = ""
            } 

            if(i >=3 && j<M-3 ){
                temp += arr[i][j] + arr[i-1][j+1] + arr[i-2][j+2] + arr[i-3][j+3]
                if(temp == "saba" ) count++
                console.log(temp)
                temp = ""
            }
        }

        
            
      

       
    }

    console.log(count)
}


solve( 5, 5, [
    ["s", "a", "f", "e", "r"], 
    ["a", "m", "j", "a", "d"], 
    ["b", "a", "b", "o", "l"], 
    ["a", "a", "r", "o", "n"], 
    ["s", "o", "n", "g", "s"]
])