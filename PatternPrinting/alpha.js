const solve = (str) => {
    let alpha = "ABCDEFGHJIKLMNPQRSTUVWXYZ"
    for(let i=1; i<str; i++){
        let final = ""
        for(let j=0; j<i; j++){
            final += alpha[j]
        }
        console.log(final)
    }
}

solve(5)

const solve1 = (str) => {
    let alpha = "ABCDEFGHJIKLMNPQRSTUVWXYZ"
    for(let i=str; i>=0; i--){
        let final = ""
        for(let j=0; j<=i; j++){
            final += alpha[j]
        }
        console.log(final)
    }
}

solve1(5)

const solve2 = (str) => {
    let alpha = "ABCDEFGHJIKLMNPQRSTUVWXYZ"
    for(let i=1; i<str; i++){
        let final = ""
        for(let j=0; j<=i; j++){
            final += alpha[i]
        }
        console.log(final)
    }
}
solve2(5)


const solve3 = (str) => {
    let alpha = "ABCDEFGHJIKLMNPQRSTUVWXYZ"
    for(let i=1; i<str; i++){
        let final = ""
        for(let j=0; j<i; j++){
            final += alpha[j]
        }
        for(let j=1; j<i; j++) final += alpha[j]
        console.log(final)
    }
}

solve3(5)