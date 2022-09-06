const solve = (N, arr) => {
    arr = arr.reverse()
    let st = new Stack()
    let g = []
    for(let i=0; i<N; i++){
        while(st.isEmpty() == false && st.peek() <= arr[i]){
            st.pop()
        }
        if(st.isEmpty()) g.push(-1)
        else g.push(st.peek())
        st.push(arr[i])
    }
    console.log(g.reverse())
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


solve(4, [1,3,2,4])