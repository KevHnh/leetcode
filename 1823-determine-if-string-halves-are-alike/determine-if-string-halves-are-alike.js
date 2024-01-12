/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let half = Math.floor(s.length / 2)
    let str1 = s.slice(0, half).toLowerCase()
    let str2 = s.slice(half).toLowerCase()

    str1 = str1.replace(/[aeiou]/gi, "")
    str2 = str2.replace(/[aeiou]/gi, "")

    return str1.length === str2.length
};