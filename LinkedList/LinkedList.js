class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class LinkedList{
    constructor(head){
        if(head == null){
            this.head = null
        }
        else{
            this.head = head
        }
    }

    getFirst(){
        return this.head
    }

    getLast(){
        let current = this.head
        while(current.next != null){
            current = current.next
        }
        return current
    }

    size(){
        let count = 0 
        let current = this.head 
        while(current != null){
            count++
            current = current.next
        }
        return count
    }

    clear(){
        this.head = null
    }
}

// Let's create the nodes
let node1 = new Node(10)
let node2 = new Node(20)

node1.next = node2

let head = null
head = node1 



// insert at the beginning

function insert_at_beginning(head, data){
    let new_node = new LinkedList(data)
    new_node.next = head 
    head = new_node
    console.log(head)
}

insert_at_beginning(head, 5)
insert_at_beginning(head, 8)


function insert_at_end(head, data){
    let new_node = new Node(data)

    if(head == null){
        head = new_node
    }
    else{
        let temp = head 
        while(temp.next != null){
            temp = temp.next
        }
        temp.next = new_node
    }
    console.log(head)
}

insert_at_end(head, 2)