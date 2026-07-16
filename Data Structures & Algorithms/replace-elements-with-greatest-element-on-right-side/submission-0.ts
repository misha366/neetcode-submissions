class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0; i < arr.length; i++) {
            let currentMax: number = -1;
            for (let k = i + 1; k < arr.length; k++) {
                if (arr[k] > currentMax) {
                    currentMax = arr[k]
                }
            }
            arr[i] = currentMax;
        }
        return arr;
    }
}
