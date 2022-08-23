// Digit Sum Array

// 12 14 16 17 29 -> 3 5 7 8 11 

const solve = (n, arr) => {
    let sum = []
    for(let i=0; i<n; i++){
        let ele_sum = 0 
        let cur_ele = arr[i]
        while(cur_ele > 0){
            ele_sum += cur_ele % 10
            cur_ele = parseInt(cur_ele /= 10)
        }
        sum.push(ele_sum)
    }
    console.log(sum.join(" "))
}


solve(5, [12, 14, 16, 17, 29])