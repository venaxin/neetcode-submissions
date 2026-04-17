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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let back = null
        let current = head
        while(current){
            let forward = current.next
            current.next = back
            back = current
            current = forward
        }
        return back
    }
}
