// Remove duplicates from the array 

let arr = [1,1,1,2,2, 3, 4,4,4]

const removeDuplicate = (arr) => {
    let j = 0 
    for(let i=0; i<arr.length-2; i++){ // will run till n - 2 
        if(arr[i] != arr[i + 1]){
            arr [j] = arr[i]
            j++
        }
    }

    arr[j] = arr[arr.length-1] // for last element 

    for(let i=0; i<=j; i++){
        console.log(arr[i])
    }
}

removeDuplicate(arr)