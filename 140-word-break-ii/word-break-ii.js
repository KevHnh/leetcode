/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Map();
    
    function run(str) {
        if(memo.has(str)) return memo.get(str);

        if(!str.length) return [];
        
        const result = [];
        
        for (let word of wordDict) {
            
            if (str.startsWith(word)) {
                const next = str.slice(word.length);
                const paths = run(next); 

                if (!paths.length && !next.length) result.push(word);
                
                result.push(...paths.map(rest => word + ' ' + rest));
            }
        }

        memo.set(str, result);

        return result;
    }
    
    return run(s);
};