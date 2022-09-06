const runProgram = input1 => {
    let input = input1.split("\n")
    let tc = input[0]
    let line = 1
    let st = new Stack()
    for(let i=0; i<tc; i++){
        let [q,x] = input[line].split(" ").map(Number)
        
        if(q == 1) st.push(x)
        else if(q == 2) st.pop()
        else if(q == 3){
            if(st.isEmpty()) console.log("Empty!")
            else console.log(st.peek())
        }
        
        line++
        
    }
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
}




if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}