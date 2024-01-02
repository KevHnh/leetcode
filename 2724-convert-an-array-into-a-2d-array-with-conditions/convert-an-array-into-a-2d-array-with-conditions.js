/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let ans = []
    let map = {}
    map[nums[0]] = 1
    ans.push(map)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < ans.length; j++) {
            if (ans[j][nums[i]] && j === ans.length - 1) {
                map = {}
                map[nums[i]] = 1
                ans.push(map)
                break
            }
            else if (!ans[j][nums[i]]){
                ans[j][nums[i]] = 1
                break
            }
        }
    }
    
    for (let i = 0; i < ans.length; i++) {
        let temp = Object.keys(ans[i])
        ans[i] = temp
    }

    return ans
};