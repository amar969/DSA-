// const solve = (N) => {
//     for(let i=0; i<N; i++){
//         let final = ""
//         for(let j=0; j<=i; j++){
//             final += i
//         }
//         console.log(final)
//     }
// }

//solve(5)

const solve1 = (N) => {
    for(let i=1; i<N; i++){
        let final = ""
        for(let j=1; j<=i; j++){
            final += j
        }
        console.log(final)
    }

    for(let i=0; i<N; i++){
        let final = ""
        for(let j=i; j>0; j--){
            final += " "
        }
        for(let j=i; j>0; j--){
            final += j
        }
        console.log(final)
    }
}

solve1(5)