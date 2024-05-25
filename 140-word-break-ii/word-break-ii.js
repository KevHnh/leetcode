/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const solutions = [];

    function search(query, prefix = '') {
        for (let term of wordDict) {
            if (query === term) {
                solutions.push(prefix + term);
                continue;
            }

            if (!query.startsWith(term)) continue;

            search(query.slice(term.length), prefix + term + ' ');
        }
    }
    
    search(s);

    return solutions;
};