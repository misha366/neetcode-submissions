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
        
        for (const char of s) {
            if (PAIRS_OPEN.some(k => k === char)) {
                openParentheses.push(char)
            } else if (PAIRS_CLOSE.some(k => k === char)) {
                if (PAIRS[openParentheses.pop()] !== char) return false;
            }
        }

        return openParentheses.length === 0;
    }
}
