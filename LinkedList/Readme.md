# Linked List Implementation in JS 

A Linked List is a linear data structure that includes a series of connected nodes. Each node in linked list two things, one is the **data (value)** and second is the **address** **(next)** of the next node, basically in simpler terms a link to the next  node.

The linked list data structure value can be of any data type (string, number, boolean, object, etc).

It has two pointers **HEAD** and **TAIL** which represents the first and the last node respectively.

<img src="https://satin-crabapple-c09.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F86240742-cf51-4e9f-b822-ec82e2a12eed%2FScreenshot_2022-06-02_at_1.42.26_AM.png?table=block&id=037367d2-3be9-49da-9888-b3cf720e2607&spaceId=86b12707-037d-4f1c-8cde-bed407df600e&width=2000&userId=&cache=v2" alt="Linked List"/> 

```
{
  head: {
    value: 4, 
    next: {
      value: "a", 
      next: {
        value: true, 
        next: {
					value: 20,
					next: null
				}
      }
    }
  }
}

```

## Advantages of Linked List 

- Nodes of the linked list can be added and removed at any particular instance without actually reorganising the entire linked list data structure.
- This is one of the advantage linked list have over arrays.

## Disadvantages of Linked List 

- Searching something in a linked list is quite slower than arrays.
- Random access of data elements are not allowed like arrays.
- Nodes are Sequentially accessible.

## Types of Linked List 

- **Singly Linked List:** Each node contains only one pointer to the next node. Basically it is unidirectional.
- **Doubly Linked Lists**: Each node contains two pointers, a pointer to the next node and a pointer to the previous node. It is bidirectional.
- **Circular Linked Lists**: Circular linked lists are a variation of a linked list in which the last node points to the first node.

## Let see the implementation 

```
class Node{
    constructor(data){
        this.data = data 
        this.next = null
    }
}

```

### Implementing Linked List class 
```
class LinkedList{
	constructor(head){
		if(head===null){
			this.head=null;
		} else {
			this.head=head;
		}
	}
}
```

Let create the two nodes 

```
let node1=new Node(10);
let node2=new Node(20);
node1.next=node2
node2.next=null
```

Now we have linked the node2 with node1, we will create a Lined List using the node1 by using the Linked List class 

```
let linked_list = new LinkedList(node1);
// Check the Linked List 

consolel.log(linked_list)
```

### Few methods that can be use

#### getFirst()
```
getFirst(){
    return this.head;
}
```

#### getLast()
```
getLast(){
    let current = this.head 
    while(current.next != null){
        current = current.next
    }
    return current 
}
```

#### Size()

```
size(){
    let count = 0 
    let current = this.head
    while(current != null){
        count++;
        current = current.next
    }
    return count
}
```

#### clear()

```
clear(){
    this.head = null
}
```