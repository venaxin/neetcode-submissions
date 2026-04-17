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
    /*
        Understand:
        Input - head of a SLL
        Output - not returning anything jsut performing the operation
        Constraints - it should follow the pattern 0,n-1,1,n-2,2,n-3,..
        Edgecases/examples - for two nodes how woudl the logic behave

        Plan - since we cant get the last nodes easily like we could 
        in array to make it accessible we can
        1. split the array
        2. reverse the second half
        3. alt between the two halves

    */
    reorderList(head) {
        // finding the midpoint
        let slow = head 
        let fast = head
        while (fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }


        // reversing the secondHalf
        let secondList = slow.next
        let back = null
        
        slow.next = null// split the list

        while(secondList){
            let forward = secondList.next
            secondList.next = back
            back = secondList
            secondList = forward
        }


        // merging two list
        let firstHalf = head
        let secondHalf = back
        while(secondHalf){
            let origfirstnext = firstHalf.next
            firstHalf.next = secondHalf
            let origsecondnext = secondHalf.next
            secondHalf.next = origfirstnext

            firstHalf = origfirstnext
            secondHalf = origsecondnext 
        }
    }
}
