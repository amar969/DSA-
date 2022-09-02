const sumRows = (N,M,arr) => {
    for(let i=0; i<N; i++){
        let ind = ""
        for(let j=0; j<M; j++){
            ind += i + j + " "
        }
        console.log(ind)
    }
}

sumRows(3,2, [[1,2],[3,4], [5,6]])