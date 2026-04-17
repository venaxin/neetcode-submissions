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
    /*
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    /*
    Understand
    we have to take two sorted list and then merge them
    and the new list must be sorted
    
    Plan
    as the two lists are already sorted we can compare the
    two heads and put the smaller one in the new list first
    and so on until both lists finish and attach the rest
    of any leftover list
    
    Implement    
     */
    mergeTwoLists(list1, list2) {
        let newNode = new ListNode(0)
        let current = newNode
        while(list1!=null && list2!= null){
            if (list1.val < list2.val){
                current.next = list1
                list1 = list1.next
            }
            else{
                current.next = list2
                list2 = list2.next
            } 
            current = current.next
        }
        if(list1!=null){
            current.next = list1
        }
        if(list2!=null){
            current.next = list2
        }
        return newNode.next
    }
}
