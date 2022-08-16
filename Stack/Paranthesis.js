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
}



const paranthesis = (str) => {
    let stk = new Stack()

    for(let i=0; i<str.length; i++){
        if(str[i] == "(" || str[i] == "{" || str[i] == "[") stk.push(str[i])

        else if(str[i] == ")" && stk.peek()=="(" || str[i] == "}" && stk.peek() == "{" || str[i] == "]" && stk.peek() == 
        "[") stk.pop()
        
        else return false
        
    }
    
    return stk.top == -1 ? true: false
    
}

console.log(paranthesis("{}()[]"))
console.log(paranthesis("{})["))
console.log(paranthesis("[()]{}"))
console.log(paranthesis("[(])"))

