// Anagrams is a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

const Anagram = (a, b) => {
    a = a.split("").sort().join("")
    b = b.split("").sort().join("")
    if(a == b) console.log("Anagram")
    else console.log("Not a anagram")
}

Anagram("india", "ndiai")