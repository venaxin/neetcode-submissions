/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Iterate while there are nodes or a carry to add
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get values, default to 0 if list is exhausted
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;

        // Calculate sum and new carry
        let sum = carry + val1 + val2;
        carry = Math.floor(sum / 10);
        
        // Create new node with the digit
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move to next nodes
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next;
    }
}
