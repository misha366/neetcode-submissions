interface MyLinkedListNode {
    val: number,
    next: MyLinkedListNode,
    prev: MyLinkedListNode
}

class MyLinkedList {

    private head: MyLinkedListNode | null = null;
    private tail: MyLinkedListNode | null = null;
    private length: number = 0;

    constructor() {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index >= this.length || index < 0) return -1;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        if (this.head === null && this.tail === null) {
            let newHead: MyLinkedListNode = { val, next: null, prev: null };
            this.head = newHead;
            this.tail = this.head;
            this.length = 1;
            return;
        }
        let newHead: MyLinkedListNode = { val, next: this.head, prev: null };
        this.head.prev = newHead;
        this.head = newHead;
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        if (this.head === null && this.tail === null) {
            let newTail: MyLinkedListNode = { val, next: null, prev: null };
            this.tail = newTail;
            this.head = this.tail;
            this.length = 1;
            return
        }
        let newTail: MyLinkedListNode = { val, next: null, prev: this.tail };
        this.tail.next = newTail;
        this.tail = newTail;
        this.length++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) return;
        if (index === 0) return this.addAtHead(val);
        if (index === this.length) return this.addAtTail(val);

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        let node: MyLinkedListNode = { val, next: current.next, prev: current };

        if (current.next !== null) {
            current.next.prev = node;
        }

        current.next = node;

        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) return;
        
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        if (current.prev !== null) {
            current.prev.next = current.next;
        } else {
            this.head = current.next;
        }

        if (current.next !== null) {
            current.next.prev = current.prev;
        }
        else {
            this.tail = current.prev;
        }

        this.length--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
