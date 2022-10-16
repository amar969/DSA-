// Leetcode questions 

var maximumWealth = function(accounts) {
    let max = - Infinity
    for(let i=0; i<accounts.length; i++){
        let sum = 0 
        for(let j=0; j<accounts[i].length; j++){
            sum += accounts[i][j]
        }
        if(sum > max) max = sum
    }
    return max
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))

// output = 6 