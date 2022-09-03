const Possible = (n, m) => {
    let count = 0 
    for(let i=0; i<=n; i++){
        for(let j=0; j<=m; j++){
            if(i**2 + j == n && j**2 + i == m ) count++ 
        }
    }
    console.log(count)
}

Possible(9,3)