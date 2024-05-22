/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    
    function helper(index, list) {
        if (index >= s.length) {
            result.push([...list]);
            return;
        }
        
        for (let i = 1; index + i <= s.length; i++) {
            const str = s.substring(index, index + i);
            
            if (isPalindrome(str)) {
                list.push(str);
                helper(index + i, list);
                list.pop();
            }
        }    
    }
    
    function isPalindrome(str) {
        const reverse = str.split("").reverse().join("");
        return str === reverse;
    }
	
	helper(0, []);
	return result;  
};