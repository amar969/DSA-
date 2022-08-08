
const BubbleSort = (n,arr) => {
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}


// Decreasing order 

const BubbleSortD = (n, arr) => {
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}

BubbleSort(5, [5,1,42,8])
BubbleSortD(5,[5,1,42,8])