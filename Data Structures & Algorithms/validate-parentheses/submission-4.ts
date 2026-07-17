class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const PAIRS = {
            '(': ')',
            '{': '}',
            '[': ']',
        };
        const PAIRS_OPEN = Object.keys(PAIRS);
        const PAIRS_CLOSE = Object.values(PAIRS);
        const openParentheses = [];
        for (let i = 0; i < s.length; i++) {
            if (PAIRS_OPEN.some(k => k === s.at(i))) {
                openParentheses.push(s.at(i))
            } else if (PAIRS_CLOSE.some(k => k === s.at(i))) {
                if (PAIRS[openParentheses.pop()] !== s.at(i)) return false;
            }
        }

        return openParentheses.length === 0;
    }
}
