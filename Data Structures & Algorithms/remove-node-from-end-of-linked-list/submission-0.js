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
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0);
  dummy.next = head;

  let first = dummy;
  let second = dummy;

  // Move the 'first' pointer n + 1 steps ahead of the 'second' pointer.
  // This creates a fixed gap of n nodes between them.
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both pointers simultaneously until 'first' reaches the end (null).
  // When 'first' is null, 'second' will be at the node just *before* the nth node from the end.
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // 'second' is at the node before the target node to be removed.
  // Skip the target node by updating 'second.next' to point to the node after the target node.
  second.next = second.next.next;

  // The head of the modified list is 'dummy.next'.
  return dummy.next;
    }
}
