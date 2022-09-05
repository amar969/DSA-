const solve = (n,m, q, arr) => {
    let s = ""
    for(let i=0; i<n; i++){
        if(q == 1){
            if( i % 2 == 0){
                for(let j=0; j<m; j++){
                    s += arr[i][j] + " "
                }
            }
            else{
                for(let j=m-1; j>=0; j--){
                    s+= arr[i][j] + " "
                }
            }   
        }

        else if(q == 2){
            if( i % 2 == 0){
                for(let j=m-1; j>=0; j--){
                    s+= arr[i][j] + " "
                }
            }
            else{
                
                for(let j=0; j<m; j++){
                    s += arr[i][j] + " "
                }
            }   
        }
    }
    console.log(s)
}

solve(
    3, 3, 1, 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
)

solve(
    3,3,2,
    [
        [1,2,3],
        [4,5,6],
        [7,8,9] 
    ]
)