/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort();

    const medianIndex = merged.length / 2;
    if (merged.length % 2) {
        return merged[Math.ceil(medianIndex) - 1];
    } else {
        return (merged[medianIndex] + merged[medianIndex - 1]) / 2;
    }
};