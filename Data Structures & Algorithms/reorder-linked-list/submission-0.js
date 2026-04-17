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
     * @param {ListNode} hea
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next || !head.next.next) return;
 
        // Step 1: Find the middle of the linked list
        let slow = head;
        let fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half of the list
        let secondHalfHead = slow.next;
        slow.next = null; // Split the list into two parts

        let prev = null;
        let curr = secondHalfHead;
        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        // 'prev' is now the head of the reversed second half

        // Step 3: Merge the two halves
        let firstHalfHead = head;
        let secondHalfReversedHead = prev; // Use 'prev' from the reversal loop
        while (secondHalfReversedHead) {
            let temp1 = firstHalfHead.next;
            let temp2 = secondHalfReversedHead.next;

            firstHalfHead.next = secondHalfReversedHead;
            secondHalfReversedHead.next = temp1;

            firstHalfHead = temp1;
            secondHalfReversedHead = temp2;
        }
    }
}
