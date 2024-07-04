/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let dummy = new ListNode(0); 
    let currentNew = dummy; 
    let currentOld = head.next;
    let sum = 0;

    while (currentOld !== null) {
        if (currentOld.val === 0) {
            if (sum !== 0) {
                currentNew.next = new ListNode(sum);
                currentNew = currentNew.next;
                sum = 0;
            }
        } 
        else {
            sum += currentOld.val;
        }

        currentOld = currentOld.next;
    }

    return dummy.next;
};