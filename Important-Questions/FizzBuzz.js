// Q. For first N natural numbers multiples of 3 are termed as "Fizz", multiples of 5 are termed as "Buzz", while multiples of 15 are termed as "FizzBuzz". Rest all numbers remain in their original form.

// Fizz Buzz 

const FizzBuzz = (N) => {
    for(let i=1; i<N; i++){
        if(i % 15 == 0) console.log("FizzBuzz")
        else if(i % 3 == 0) console.log("Fizz")
        else if(i % 5 == 0) console.log("Buzz")
        else console.log(i)
    }
}

FizzBuzz(20)
FizzBuzz(10)

// Time Complexity $O(N)