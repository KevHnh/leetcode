/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Map();

    function dfs(start) {
        if (memo.has(start)) {
            return memo.get(start);
        }
        if (start === s.length) {
            return [''];
        }

        const results = [];
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const subResults = dfs(end);
                for (const subResult of subResults) {
                    const space = subResult.length ? ' ' : '';
                    results.push(word + space + subResult);
                }
            }
        }
        memo.set(start, results);
        return results;
    }

    return dfs(0);
};