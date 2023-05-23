const {runTestCases} = require("./utils");
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.nums = nums.sort();
    this.position = k;
    this.add = (val) => {
        this.nums = [...this.nums, val].sort((a,b) => a-b);
        return this.nums.at(-this.position);
    }
};

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

const testcases = [
    [4, 3],
    [5, 5],
    [5, 10],
    [8, 9],
    [8, 4]
]
runTestCases(kthLargest.add, testcases);
