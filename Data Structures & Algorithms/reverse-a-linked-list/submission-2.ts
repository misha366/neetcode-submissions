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
        let next = current.next;
        let prev = null;
        
        while (next !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            if (next !== null) current = next;
        }
        return current;
    }
}
