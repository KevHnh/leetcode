/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let map = {}
    let arr = []
    let curr = chars[0]

    for (let i = 0; i <= chars.length; i++) {
        if (chars[i] !== curr || i === chars.length) {
            arr.push([curr, map[curr]])
            map[curr] = 0
            curr = chars[i]
        }

        map[chars[i]] ? map[chars[i]]++ : map[chars[i]] = 1
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i][1] = arr[i][1].toString().split("")
    }

    chars.splice(0, chars.length)

    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i][1].join("")) === 1) {
            chars.push(arr[i][0])
        }
        else {
            chars.push(arr[i][0])
            chars.push(...arr[i][1])
        }
    }
};