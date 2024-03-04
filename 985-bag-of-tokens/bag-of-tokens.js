/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
    tokens.sort((a, b) => a - b);

    let l = 0
    let r = tokens.length - 1
    let score = 0
    let res = 0;

    while (l <= r && (power >= tokens[l] || score > 0)) {
        while (l <= r && power >= tokens[l]) {
            power -= tokens[l++];
            score++;
        }

        res = Math.max(res, score);

        if (l <= r && score > 0) {
            power += tokens[r--];
            score--;
        }
    }
    return res;
};