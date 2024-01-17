/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let map = {}

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[aeiou]/gi, "")) {
            map[i] = s[i]
        }
    }

    let entries = Object.entries(map)
    s = s.split("")

    for (let i = 0; i < entries.length; i++) {
        s[entries[entries.length - i - 1][0]] = entries[i][1]
    }

    return s.join("")
};