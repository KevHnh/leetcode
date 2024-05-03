/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1 = version1.split(".")
    version2 = version2.split(".")
    let n = Math.max(version1.length, version2.length)

    for (let i = 0; i < n; i++) {
        let num1 = parseInt(version1[i] || 0)
        let num2 = parseInt(version2[i] || 0)

        if (num1 == num2) {
            continue
        }

        return num1 > num2 ? 1 : -1
    }

    return 0
};