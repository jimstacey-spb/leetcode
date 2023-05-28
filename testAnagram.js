const {runTestCases} = require("./utils");

function hashmapSolution(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const hashmap = {};

    for (let char of str1) {
        if (!hashmap[char]) {
            hashmap[char] = 1;
        } else {
            hashmap[char] += 1;
        }
    }

    for (let char of str2) {
        if (!hashmap[char]) {
            return false;
        } else {
            hashmap[char] -= 1;
        }
    }

    return true;
}

function sortedArraySolution (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    str1 = [...str1.toLowerCase()].sort().join('');
    str2 = [...str2.toLowerCase()].sort().join('');

    return str1 === str2;

}

const testcases = [
    [true, 'friend', 'finder'],
    [false, 'friend', 'finder1'],
    [false, 'вфыапывапавч', '12312321'],
];

runTestCases(hashmapSolution, testcases);
runTestCases(sortedArraySolution, testcases);