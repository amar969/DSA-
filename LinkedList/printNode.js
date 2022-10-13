// Print the Linked List elements 

const solve = (head) => {
    let ans = ""
    let temp = head 
    while(temp != null){
        ans += temp.data
        temp = temp.next
    }
    console.log(ans)
}


solve()