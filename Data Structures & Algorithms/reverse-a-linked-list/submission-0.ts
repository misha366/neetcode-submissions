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
    reverseList(head: ListNode | null): ListNode {
        if (head === null) return null;
        let current = head;
        let nodes: ListNode[] = [];
        while (current !== null) {
            nodes.push(current)
            current = current.next;
        }
        
        for (let i = nodes.length - 1; i >= 0 ; i--) {
            nodes[i].next = nodes[i - 1] ?? null;
        }
        
        return nodes.at(-1);
    }
}
