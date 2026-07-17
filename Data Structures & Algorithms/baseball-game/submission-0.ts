class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let result = 0;
        let record = [];

        for (const operation of operations) {
            const numberOperation = +operation;
            if (!Number.isNaN(numberOperation)) {
                result += numberOperation;
                record.push(numberOperation)
            } else if (operation === '+') {
                const sumResult = record.at(-1) + (record.at(-2) ?? 0)
                result += sumResult;
                record.push(sumResult)
            } else if (operation === 'D') {
                const doubleResult = record.at(-1) * 2
                result += doubleResult;
                record.push(doubleResult)
            } else if (operation === 'C') {
                result -= record.at(-1);
                record.pop();
            }
        }
        return result;
    }
}
