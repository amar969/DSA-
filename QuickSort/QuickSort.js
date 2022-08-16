function quickSort(array){
    if(array.length  <= 1 ) return array 

    const pivot = array[array.length-1]
    const leftArr = []
    const rightArr = []

    for( let el of array.slice(0, array.length-1)){
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }

    return[...quickSort(leftArr),pivot, ...quickSort(rightArr) ]
    
    
}

const array = [1,4,3,2,145,43,32, 5643, 63, 123, 43, 2, 55, 5, 234, 92]
const arr2 = [1, 8, 3, 9, 4, 5, 7]

console.log(quickSort(array))
console.log(quickSort(arr2))