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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let dummyHead = new ListNode(0) 
        let current = dummyHead
        let startingpoint = current
        while (list1 !== null && list2 !== null) {

            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        if (list1 !== null) {
            current.next = list1;
        } else if (list2 !== null) {
            current.next = list2;
        }

        return startingpoint.next 
        
    }
}
