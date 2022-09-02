const Nested_loop = (N) => {
    for(let i=0; i<N; i++){
        let str = ""
        for(let j=0; j<N; j++){
            str += j + " "
        }
        console.log(str)
    }
}

Nested_loop(5)