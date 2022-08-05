// Check Palindrome 

const palindrome = (string) => {
    let left = 0
    let right = string.length - 1
    while(left <= right){
        if(string[left] == string[right]){
            left++
            right--
        }
        else{
            return false
        }
    } 
    return true
}

console.log(palindrome("naman"))
console.log(palindrome("amarjeet"))