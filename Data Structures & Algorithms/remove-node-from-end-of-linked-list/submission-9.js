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
     * @param {number} n
     * @return {ListNode}
     */

    /*
    Understand
    I - head of a linked list
    O - return head of the same updated linked list
    C - one pass solution, n<=length of list
    E - if n = 1 in 1 node list, n>length of list

    Plan
    use two pointers
    1. add a dummynode in front of head
    2. move the right pointer to n nodes forward 
    3. then move both pointers together so theres an 'n' gap between the two pointers
    so that when the right pointer reaches null the left will be at (last - n) position 
    4. skip one connection
    5. return head

    */
    removeNthFromEnd(head, n) {
        let dummyNode = new ListNode(0)
        dummyNode.next = head

        let slow = dummyNode
        let fast = dummyNode

        let jumps = 0

        // move fast forward by n times
        while(jumps<n){
            fast = fast.next
            jumps++
        }
        // move both together until fast reaches end
        while(fast.next){
            slow = slow.next
            fast = fast.next
        }
        // skip the connection
        slow.next = slow.next.next
        // returning dummyNode.next incase the head is removed
        return dummyNode.next
    }
}
