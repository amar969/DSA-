const runProgram = (input1) => {
    let input = input1.split("\n")
    let tc = input[0]
    let line = 1 
    let qu = []
    let st = []
    for(let i=0; i<tc; i++){
        let query = input[line].split(" ").map(Number)
        if(query[0] == 1) qu.push(query[1])
        else if(query[0] == 2) st.push(query[1])
        else if(query[0] == 3) {
            if(qu.length == 0) console.log(-1)
            else console.log(qu[0])
        }
        else if(query[0] == 4) {
            if(st.length == 0) console.log(-1)
            else console.log(st[st.length - 1])
        }
        else if(query[0] == 5){
            st.push(qu[0])
            qu = qu.splice(1, qu.length)   
        }
        line++
    }
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