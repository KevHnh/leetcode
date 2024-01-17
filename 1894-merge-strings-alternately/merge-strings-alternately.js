/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let ans = []
    word1 = word1.split("")
    word2 = word2.split("")

    while (word1.length > 0 && word2.length > 0) {
        if (word1) {
            ans.push(word1.shift())
        }
        if (word2) {
            ans.push(word2.shift())
        }
    }

    if (word1.length >= 1) {
        ans.push(...word1)
    }
    else {
        ans.push(...word2)
    }

    return ans.join("")
};