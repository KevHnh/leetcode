/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []

    while (head) {
        arr.push(head.val) 
        head = head.next
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[arr.length - i - 1]) {
            continue
        }
        else {
            return false
        }
    }

    return true
};