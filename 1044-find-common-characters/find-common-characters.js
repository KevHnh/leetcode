/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    const minFreq = Array(26).fill(Infinity);

    for (const word of words) {
        const charCount = Array(26).fill(0);

        for (const char of word) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], charCount[i]);
        }
    }

    const result = [];

    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < minFreq[i]; j++) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }

    return result;
};