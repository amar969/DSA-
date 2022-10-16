const solve = (ransomNote, magazine) => {
    let mag = {}
    for(let i=0; i<magazine.length; i++){
        if(mag[magazine[i]]) mag[magazine[i]]++
        else mag[magazine[i]] = 1
    }

    for(let i=0; i<ransomNote.length; i++){
        let char = ransomNote[i]
        if(mag[char] == 0 || !mag[char]) return false

        mag[char]--
    }

    return true
}

console.log(solve("aa" , "aab"))