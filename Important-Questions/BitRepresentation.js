// Bit represenation of numbers 

const binary = (n) => {

    let a= n.toString(2)
    console.log(a)
    console.log(parseInt(a, 2))
}

binary(5)
binary(3)

const hexadecimal = (n) => {
    let he = n.toString(16)
    console.log(he)
    console.log(parseInt(he, 16))
}
hexadecimal(42)
hexadecimal(45)

// Time Complexity -> $O(1)