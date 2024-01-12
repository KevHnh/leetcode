/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let string1 = s.substring(0, s.length / 2).toLowerCase()
    let string2 = s.substring(s.length / 2, s.length).toLowerCase()
    let cnt1 = 0
    let cnt2 = 0
    let dict = {'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1, 'u' : 1}

    for (let i = 0; i < s.length / 2; i++) {
        if (dict[string1[i]]) {
            cnt1++
        }
        if (dict[string2[i]]) {
            cnt2++
        }
    }

    return cnt1 === cnt2
};