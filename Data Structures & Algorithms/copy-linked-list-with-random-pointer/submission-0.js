// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) {
        return null;
    }

    // 1. Create a hash map to store the mapping between original nodes and their copies.
    const originalToCopyMap = new Map();
    let curr = head;

    // First pass: create all new nodes and store them in the map.
    while (curr) {
        originalToCopyMap.set(curr, new Node(curr.val, null, null));
        curr = curr.next;
    }

    curr = head;

    // Second pass: assign the 'next' and 'random' pointers for each copied node using the map.
    while (curr) {
        const copyNode = originalToCopyMap.get(curr);
        // The 'next' pointer of the copy should point to the copy of the original's 'next'
        copyNode.next = originalToCopyMap.get(curr.next) || null; 
        // The 'random' pointer of the copy should point to the copy of the original's 'random'
        copyNode.random = originalToCopyMap.get(curr.random) || null;
        curr = curr.next;
    }

    // Return the head of the cloned linked list, which is the copy of the original head.
    return originalToCopyMap.get(head);
    }
}
