/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    word.split("")
    let start = 0
    let end = word.indexOf(ch) + 1
    let remainder = word.substring(end, word.length)
    let reverse = word.substring(start, end).split("").reverse().join("")

    return reverse + remainder
};