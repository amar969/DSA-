class Node{
    constructor(val){
        this.data = val 
        this.next = null
    }
}

let Node1 = new Node(1)
let Node2 = new Node(2)
let Node3 = new Node(6)
let Node4 = new Node(3)
let Node5 = new Node(4)
let Node6 = new Node(5)
let Node7 = new Node(6)

Node1.next = Node2
Node2.next = Node3
Node3.next = Node4
Node4.next = Node5
Node5.next = Node6
Node6.next = Node7

let head = Node1
console.log(head)

function removeDuplicate(head, val){
    let cur = head
    while(cur != null && cur.next !=null){
        if(cur.data == val) cur.next = cur.next.next
        else cur = cur.next
    }

}