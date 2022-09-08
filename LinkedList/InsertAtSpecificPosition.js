class LinkedList{
    constructor(val){
        this.data = val 
        this.next = null
    }
}

function speicific_position(head, data, position){
    let new_node = new LinkedList(data)

    if(head == null){
        new_node.next = head 
        head = new_node
    }
    else{
        if(position == 0){
            new_node.next = head 
            head = new_node
        }

        else{
            let temp = head
            for(let i=0; i<position-1; i++){
                temp = temp.next
            }

            new_node.next = temp.next
            temp.next = new_node
        }
    }
    return head
}