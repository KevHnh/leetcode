/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let curr = haystack.slice(i, i + needle.length)

        if (curr === needle) {
            return i
        }
    }

    return -1
};