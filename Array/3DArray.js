// 3D Array

const Array = (n, m, K, arr) => {
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            let str = ""
            for(let k=0; k<K; k++){
                str += arr[i][j][k] + " "
            }
            console.log(str)
        }
    }
}

Array(
    2 , 2, 2, 
    [
        1,2,3,4,5,6,7,8
    ]
)