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
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (list1 === null && list2 === null) return null;
        let list1Current = list1;
        let list2Current = list2;

        let values = [];

        while (list1Current !== null || list2Current !== null) {
            if (list1Current !== null) values.push(list1Current.val);
            if (list2Current !== null) values.push(list2Current.val);

            list1Current = list1Current?.next ?? null;
            list2Current = list2Current?.next ?? null;
        }

        values.sort((a, b) => a - b);

        let currentReturnList: ListNode = {val: values[0], next: null};
        const returnHead = currentReturnList;

        for (let i = 1; i < values.length; i++) {
            const node: ListNode = { val: values[i], next: null };
            currentReturnList.next = node;
            currentReturnList = node;
        }

        return returnHead;
    }
}
