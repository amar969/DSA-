const solve = (head) => {
    let count = 0 
    let temp = head
    while(temp != null){
        count++
        temp = temp.next
    }
    return count
}