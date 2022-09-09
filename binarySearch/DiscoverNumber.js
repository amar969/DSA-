const solve = (arr, t) => {
    let l = 0 
    let r = arr.length - 1 
    let mid = 0 
    while(l < r){
        mid = l + parseInt((r - l) / 2)
        if(arr[mid] == t) return "Yes"
        else if(arr[mid] > t) l = mid + 1
        else r = mid + 1
    }
    return "No"
}

console.log(solve([50, 40, 30, 20, 10], 10))