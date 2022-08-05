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
node2.next = null
let lined_list = new LinkedList(node1)

console.log(lined_list)

console.log("Linked List Head", lined_list.getFirst())
console.log("Linked List Tail", lined_list.getLast())
console.log("Linked List Size", lined_list.size())


