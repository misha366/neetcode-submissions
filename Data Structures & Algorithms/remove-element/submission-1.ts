class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let nonValLength = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[nonValLength] = nums[i];
                nonValLength++;
            }
        }

        return nonValLength;
    }
}
