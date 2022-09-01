// Merge two sorted Array 

let arr1 = [1,3,10,11,13]
let arr2 = [2,4,5,7,9]
let arr3 = []
const mergeSorted = (arr1, arr2, arr3) => {
    let i = 0
    let j = 0 
    let k = 0  
    while( i < arr1.length && j < arr2.length ){
        if(arr1[i] < arr2[j]){
            arr3[k] = arr1[i]
            i++
            k++
        }
        else{
            arr3[k] = arr2[j]
            j++
            k++
        }
    }

    while (i < arr1.length){
        arr3[k] = arr1[i]
        i++
        k++
    }

    while(j < arr2.length){
        arr3[k] = arr2[j]
        j++
        k++
    }

    return arr3
}

console.log(mergeSorted(arr1, arr2, arr3))
