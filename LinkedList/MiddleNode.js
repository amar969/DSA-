class LinkedList{
    constructor(val){
        this.data = val 
        this.next = null
    }
}


function middle_node(head){
    let len = 0 
    let temp = head 
    while(temp != null){
        temp = temp.next
        len++ 
    }

    let middle = Math.floor(len / 2)
    temp = head
    for(let i=0; i<middle; i++){
        temp = temp.next
    }

    return temp.data
}