const interSection = (N, arr1, arr2) => {
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(arr1[i] == arr2[j] ) {
                console.log(arr2[j])
                return 
            }
        }
    }
}

interSection(3, [4,5,7], [9,2,5])