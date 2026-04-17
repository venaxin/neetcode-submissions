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
     * @param {number} k
     * @return {ListNode}
     */

    
    reverseKGroup(head, k) {
        if (!head || k === 1) {
        return head;
    }

    // A helper to find the k-th node from a starting point.
    // The problem constraints require this logic be embedded or the user
    // provides an understanding of how to implement it inline.
    // We can manually implement the check within the main loop.
    
    const dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        let kthNode = groupPrev;
        // Check if there are at least k nodes remaining
        for (let i = 0; i < k; i++) {
            if (!kthNode.next) {
                return dummy.next; // Not enough nodes left, return the list as is
            }
            kthNode = kthNode.next;
        }
        
        const groupNext = kthNode.next;
        
        // Reverse the current k-group in-place
        let prev = groupNext; // The node the reversed group's tail should point to
        let curr = groupPrev.next; // The first node of the current group
        
        while (curr !== groupNext) {
            const tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
        }

        // Reconnect the reversed group to the rest of the list
        const tmpNode = groupPrev.next; // This was the original first node of the group (now the tail)
        groupPrev.next = kthNode; // The new head of the reversed group (original kth node)
        groupPrev = tmpNode; // Move groupPrev to the end of the newly reversed group for the next iteration
    }
    };

    
}