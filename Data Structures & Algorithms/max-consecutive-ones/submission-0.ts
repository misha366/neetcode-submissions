class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let accumulator = 0;
        let max = 0;
        for (const n of nums) {
            if (n === 0) {
                accumulator = 0;
                continue;
            }
            accumulator++;
            if (accumulator > max) {
                max = accumulator;
            }
        }
        return max;
    }
}
