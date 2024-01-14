/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }
    
    let map1 = {}
    let map2 = {}

    for (let i = 0; i < word1.length; i++) {
        map1[word1[i]] ? map1[word1[i]]++ : map1[word1[i]] = 1
        map2[word2[i]] ? map2[word2[i]]++ : map2[word2[i]] = 1
    }

    let keys1 = Object.keys(map1).sort() 
    let keys2 = Object.keys(map2).sort() 
    let cnt1 = Object.values(map1).sort() 
    let cnt2 = Object.values(map2).sort() 

    for (let i = 0; i < cnt1.length; i++) {
        if (keys1[i] !== keys2[i] || cnt1[i] !== cnt2[i]) {
            return false
        }
    }

    return true
};