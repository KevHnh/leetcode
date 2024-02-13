/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    function check(word) {
        let left = 0
        let right = word.length - 1

        while (left <= right) {
            if (word[left] === word[right]) {
                left++
                right--
            }
            else {
                return false
            }
        }

        return true
    }
    
    for (let i = 0; i < words.length; i++) {
        if (check(words[i])) {
            return words[i]
        }
    }

    return ""
};