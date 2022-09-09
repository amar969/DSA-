class LinkedList{
    constructor(val){
        this.data = val
        this.next = null
    }
}

function removeDuplicate(head){
    let cur = head
    while(cur != null && cur.next != null){
        if(cur.data == cur.next.data) cur.next = cur.next.next
        else cur = cur.next
    }

    return head
}