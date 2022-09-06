function runProgram(input1){
    let input = input1.trim().split("\n")
    let line = 0
    while(true){
        let N = parseInt(input[line])
        line++
        if(N == 0) return 
        let arr = input[line].trim().split(" ").map(Number)
        line++
        console.log(solve(N, arr))
    }
   
}

function solve(N, arr){
    let stk = []
    let next_number = 1 
    let end = 0
    while(end < N || stk.length > 0){
        if(end < N && arr[end] == next_number){
            end++
            next_number++
        }
        else if(stk.length > 0 && stk[stk.length-1] == next_number){
            stk.pop()
            next_number++
        }
        else if(end < N){
            stk.push(arr[end])
            end++
        }
        else return "no"
    }
    if(next_number > N) {
        return "yes"
    }
    else return "no"
}



process.stdin.resume()
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function(input){
    read += input; 
});
process.stdin.on("end",function(){
    read = read.replace(/\n$/,"");
    read = read.replace(/\n$/,"");
    runProgram(read)
});