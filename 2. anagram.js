const anagram = (word1, word2) => {
    if(word1.toLowerCase().length !== word2.toLowerCase().length){
        return false;
    } else {
        return word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("")
    }
}

anagram("amor","roma")