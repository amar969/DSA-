// Sum of indexes 
// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM
// At index (0,0), the sum of indexes becomes (0 + 0 = 0)
// At index (0,1), the sum of indexes becomes (0 + 1 = 1)
// At index (1,0), the sum of indexes becomes (1 + 0 = 1)
// At index (1,1), the sum of indexes becomes (1 + 1 = 2)
// At index (2,0), the sum of indexes becomes (2 + 0 = 2)
// At index (2,1), the sum of indexes becomes (2 + 1 = 3)

// Therefore, the output becomes 

// 0 1
// 1 2
// 2 3

const sumIndex = (N, M, arr) => {
    for(let i=0; i<N; i++){
        let sum = ""
        for(let j=0; j<M; j++){
           sum +=  i+j + " "
        }
        console.log(sum)
    }
}

sumIndex(
    3, 2,
[[1, 2],
[3, 4],
[5, 6]]
)

// Q. Odd Sum in Columns

const oddSum = (N, M, arr) => {
    for(let i=0; i<N; i++){
        let sum = 0
        for(let j=0; j<M; j++){
            if(arr[j][i] % 2 != 0) sum += arr[j][i]
        }
        console.log(sum)
    }
}
oddSum(
    3, 3,
[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
)

// Q Smallest and largest in an array

const minMax = (n, arr) => {
    let min = Infinity
    let max = -Infinity
    for(let i=0; i<n; i++){
        if(arr[i] < min) min = arr[i]
        if(arr[i] > max) max = arr[i]
    }
    console.log(min, max)
}

minMax(
    4, [-2, 0 ,8 ,4]
)

// Q. Cart Total 

const cartTotal = (n, price, qu) => {
    let cart = 0 
    for(let i=0; i<n; i++){
        cart += (price[i] * qu[i]) 
    }
    console.log(cart)
}

cartTotal(
    3, 
    [100, 20, 40 ],
    [2, 1, 2]
) 

// Time Complexity => $O (N)

// Q. Stronly typed password

const strongPass = (n, string) => {
    let strength = []
    for(let i=0; i<n; i++){
        if(string[i].includes("*") || string[i].includes("#") || string[i].includes("@") || string[i].includes("$")) strength.push("strong")
        else strength.push("week")
    }
    console.log(strength)
}

strongPass(4, ["test123", "new@t",  "mon*y", "nrupul"])


// Q. Remove upper case 

const removeUpper = (n, str) => {
    let s = ""
    for(let i=0; i<n; i++){
        console.log(str.charCodeAt([i]))
        if(str.charCodeAt([i]) >= 97 && str.charCodeAt([i]) <= 122) s += str[i]
    }
    console.log(s)
}

removeUpper(5, "MasAi")