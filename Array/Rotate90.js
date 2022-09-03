const rotate = (N, arr) => {
   for(let i=N-1; i>=0; i--){
       let s = ""
       for(let j=0; j<N; j++){
           s += arr[j][i] + " "
       }
       console.log(s)
   }
}

rotate(
    4, [
        [1,2,3,4],
        [5,6,7,8],
        [1,2,3,4],
        [5,6,7,8]
    ]

)