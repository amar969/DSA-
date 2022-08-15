/// Reverse a string 

// 1) Using inbuilt way to reverse the string 

const rev_str_inbuilt = (str) => {
    return str.split("").reverse().join("")
}

console.log(rev_str_inbuilt("Amarjeet"))
console.log(rev_str_inbuilt("Raman"))

// Reverse the string iterativly 

const rev_str_iter = (str) => {
    let new_str = ""

    for(let i=str.length-1; i>=0; i--){
        new_str += str[i]
    }
    console.log(new_str)
}

rev_str_iter("Amarjeet")


// Recursively reverse the string 

const reverse_recursive = (str) => {
    if(str === "") return "";
    else {
        //console.log(reverse_recursive(str.substr(1)) + str.charAt(0))
        return reverse_recursive(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverse_recursive("India"))