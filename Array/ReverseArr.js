// Reverse the arr 

// 1st approach
const solve = (arr) => {
    let newArr = []
    // storing every element in the new array while traversing in reverse direction
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }
    console.log(newArr)
}

solve([4,5,1,2])

console.log("----")

// 2nd Approach - Instead of complete arr traversal we have reduce it to just half step and we will able to reverse the array
const solve1 = (arr) => {
    let l  = 0 
    let r = arr.length - 1 
    while(l < r){
        temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
        l++
        r--
    }
    console.log(arr)
}

solve1([4,5,1,2])

// 3rd Approach
const solve3 = (arr) => { 
    console.log(arr.reverse())
 }

 solve3([4,5,1,2])


 // 4th approach using stack 

 const sovle4 = (arr) => {
     let stk = []
     for(let i=0; i<arr.length; i++) stk.push(arr[i])

     for(let i=0; i<arr.length; i++) arr[i] = stk.pop()

     console.log(arr)
    }

sovle4([4,5,1,2])

// All above method is Time Complexity is O(N) 