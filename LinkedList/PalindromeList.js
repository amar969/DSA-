class LinkedList{
    constructor(val){
        this.data = val 
        this.next = null
    }
}


function palindrome(head ){
    let arr = []
    let temp = head
    while(temp != null){
        arr.push(temp.data)
        temp = temp.next
    }

    let l = 0 
    let r = 0
    let f = 0  
    while(l < r){
        if(arr[l] != arr[r]){
            f = 1 
        }
        else {
            l++
            r--
        }
    }

    if(f == 1) console.log(false)
    else console.log(true)
}