interface BrowserHistoryNode {
    next: BrowserHistoryNode | null,
    prev: BrowserHistoryNode | null,
    val: string
}

class BrowserHistory {
    private currentPage: BrowserHistoryNode;

    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        let node = { val: homepage, next: null, prev: null };
        this.currentPage = node;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let node = { val: url, next: null, prev: this.currentPage };
        this.currentPage.next = node;
        this.currentPage = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        for (let i = 0; i < steps && this.currentPage.prev !== null; i++) {
            this.currentPage = this.currentPage.prev;
        }
        return this.currentPage.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        for (let i = 0; i < steps && this.currentPage.next !== null; i++) {
            this.currentPage = this.currentPage.next;
        }
        return this.currentPage.val;
    }
}
