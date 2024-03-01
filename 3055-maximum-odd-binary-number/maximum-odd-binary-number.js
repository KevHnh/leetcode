/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    s = s.split("")
    let ans = ""
    let zero = ""
    let one = ""

    for (let i = 0; i < s.length; i++) {
        if (ans.length === 0 && s[i] === "1") {
            ans += "1"
            continue
        }  

        if (s[i] === "1") {
            one += "1"
        }
        else {
            zero += "0"
        }
    }   

    return one + zero + ans
};