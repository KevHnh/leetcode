/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    let map = {}

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            map[words[i][j]] ? map[words[i][j]]++ : map[words[i][j]] = 1
        }
    }

    for (let val of Object.values(map)) {
        if (val % words.length !== 0) {
            return false
        }
    }

    return true
};