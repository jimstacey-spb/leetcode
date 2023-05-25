/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let length = 0;
    let map = {};
    for (let char of s) {
        if (map.hasOwnProperty(char)) {
            length = 0;
            map = {};
        } else {
            map[char] = true;
            length++;
            if (length > maxLength) {
                maxLength++;
            }

        }
    }
    return maxLength;
};