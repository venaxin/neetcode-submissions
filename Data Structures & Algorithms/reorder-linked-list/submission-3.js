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
 
        let slow = head;
        let fast = head;
        // the middle of linked list
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse second half of the list
        let secondHalfHead = slow.next;
        // split list into two parts
        slow.next = null; 

        let prev = null;
        let curr = secondHalfHead;
        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        // prev is now head of reversed second half

        // merge the two halves
        let firstHalfHead = head;
        let secondHalfReversedHead = prev; // using prev from the reversal loop
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
