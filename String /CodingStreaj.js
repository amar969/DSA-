const solve = (N, arr) => {
    let count = 0 
    let long = 0 

    for(let i=0; i<arr.length; i++){
        let x = 0 
        let w = 0 
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] == "C"){
                w++
                if(x < w){
                    x = w
                }
            }
            else{
                    x = Math.max(x,  w)
                    w = 0
                }
            
        }
       count = Math.max(count, x)
    }

    let st = ""
    for(let i=0; i<arr.length; i++){
        st += arr[i]
    }

    let ch = 0 
    for(let i=0; i<st.length; i++){
        if(st[i] == "C") ch++ 
        else{
            long = Math.max(long, ch)
            ch = 0
        }
    }

    console.log(count, long)
}

solve(
    4, [
        "SSSSEEEECCCCEECCCC",
        "CCCCCSSSSEEECCCCSS",
        "SSSSSEEESSCCCCCCCS",
        "EESSSSCCCCCCSSEEEE"
    ]
)