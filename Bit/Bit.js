const findDuplicate = (arr, N) => {
    let obj = {}
    for(let i=0; i<N; i++){
        if(obj[arr[i]] == undefined) obj[arr[i]] = 1
        else obj[arr[i]]++
    }

    let res = ""
    for(let i in obj){
        if(obj[i] >= 2) res += i + " "
    }

    console.log(res)
}

findDuplicate([1, 2, 3, 6, 3, 6, 1], 7)
//findDuplicate([ 2, 3, 6, 3, 6, 1, 8], 7)