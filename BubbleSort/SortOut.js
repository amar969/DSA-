const solve = (N, arr) => {
    let a = [] 

    for(let i=0; i<N; i++){
        a.push(i)
    }

    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
            }
        }
    }
    console.log(a.join(" "))
}

solve(5, [4, 5, 3, 7, 1])