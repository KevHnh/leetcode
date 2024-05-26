/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
    let a = 1, b = 1, d = 1, c = 0, e = 0, f = 0;
    const M = 1000000007;
    
    for (let i = 1; i < n; i++) {
        let temp1 = (a + b + c) % M;
        let temp2 = (temp1 + d + e + f) % M;
        c = b;
        b = a;
        f = e;
        e = d;
        a = temp1;
        d = temp2;
    }

    return (a + b + c + d + e + f) % M;
};