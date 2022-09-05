const solve = (N, arr) => {
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(arr[j] < arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            else if(arr[j] == arr[j+1] && name[j] > name[j+1]){
                temp = name[j]
                name[j] = name[j+1]
                name[j+1] = temp
            }
        }
    }
}