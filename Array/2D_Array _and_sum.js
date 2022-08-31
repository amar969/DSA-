const solve = (n, m , k , arr) => {
    let count = 0 

    for(let i=0; i<n; i++){
        let sum = 0 
        for(let j=0; j<m; j++){
            sum += arr[i][j]
        }
        if(sum == k) count++
    }

    for(let i=0; i<n; i++){
        let sum = 0
        for(let j=0; j<m; j++){
            sum += arr[j][i]
        }
        if(sum == k) count++
    }

    for(let i=0; i<n; i++){
        let sum = 0 
        for(let j=0; j<m; j++){
            if( i == j){
                sum += arr[i][j]
            }
            if(i + j == n){
                sum+= arr[i][j]
            }
        }
        if(sum == k) count++
    }
    console.log(count)
}

solve(
    3, 3, 6,
    [ [ 3, 2, 1],
      [2, 2, 2],
      [1, 5, 1] ]
)