const mapNumbers = (n, N) => {
    let obj = {}
    for(let i=1; i<=n; i++){
        obj[i] = N
        N++
    }
    
    for(let key in obj){
        console.log(key + "-" + obj[key]) 
    }
}
mapNumbers(5, 10)