// Reverse the array in place -> inplace means Space Complexity $O(1)

let arr = [7,4,9,6,21,8,11,17]

const reverseArr = (arr) => {
    let l = 0 
    let r = arr.length-1
    while(l < r){
        temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++
        r--
    }
    return arr 
}

console.log(reverseArr(arr))