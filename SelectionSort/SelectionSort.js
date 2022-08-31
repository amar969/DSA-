
// function solve(N,arr){
//     var min = 0;
//     for(let i=0; i<N; i++){
//         min = i;
//         for(let j=i+1; j<N; j++){
//             if(arr[min] > arr[j]){
//                 min = j
//             }
//         }
//         var temp = arr[i];
//         arr[i] = arr[min];
//         arr[min] = temp;
//     }
//     var str = ""
//     for(let k=0; k<N; k++){
//         str+=arr[k] + " ";
//     }
//     console.log(str);
// }

// solve(5, [64, 25, 12, 22, 11 ])

function solve(N, arr){
    let min = 0 
    for(let i=0; i<N; i++){
        min = i 
        for(let j=i+1; j<N; j++){
            if(arr[min] > arr[j]) min = j
        }

        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }

    console.log(arr)
}

solve(5, [3,5,0,9,8])