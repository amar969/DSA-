const solve = (arr) => {
    for(let i=0; i<arr.length; i++){
       for(let j=0; j<arr.length; j++){
           console.log(arr[i] + " - " + 2 * arr[j])
           if(i != j && arr[i] == 2 * arr[j]) return true
       }
    }
    return false
}
console.log(solve([10, 2, 5, 3]))
console.log(solve([3,1,7,11]))
console.log(solve([7,1,14,11]))