const solve = (str) => {
    let st = new Stack()
    for(let i=0; i<str.length; i++){
        if(st.isEmpty() || st.peek() != str[i]){
            st.push(str[i])
        }
        else if(st.peek() === str[i]) st.pop()
        else st.push(str[i])
    }

    if(st.isEmpty()) console.log("Empty String")

    else console.log(st.printArr().join(""))
}


class Stack {
	constructor(max_length) {
		this.arr = []
		this.top = -1
		this.max_length = max_length
	}

push(x) {
	if (this.top == this.max_length - 1) {
		console.log("not possible, stack is full")
		return
	}
	this.top ++
	this.arr[this.top] = x
	}

pop() {
	if (this.top == -1) {
	console.log("Stack is empty!")
	return
	}
	var top_ele = this.arr[this.top]
	this.top--
	return top_ele
	}

peek() {
	if (this.top == -1) {
	console.log("Stack is empty!!")
	return
	}
	return this.arr[this.top]
	}

isEmpty(){
    if(this.top == -1 ) return true 
    else return false
}

printArr(){
    return this.arr
}

}


solve("aaabccddd")