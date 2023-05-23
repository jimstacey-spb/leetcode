const {runTestCases} = require('./utils');

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function loopSolution (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }

    ransomNote = ransomNote.split('').sort();
    magazine = magazine.split('').sort();

    let mi = 0;
    let ri = 0;
    while (ri < ransomNote.length) {
        if (mi === magazine.length) {
            return false;
        }
        if (ransomNote[ri] === magazine[mi]) {
            ri++;
        }
        mi++;
    }
    return true;
}

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function mapSolution (ransomNote, magazine) {
    const magazineMap = {};
    for (const char of magazine) {
        if (!magazineMap[char]) {
            magazineMap[char] = 1;
        } else {
            magazineMap[char] += 1;
        }
    }

    for (const char of ransomNote) {
        if (magazineMap[char]) {
            magazineMap[char]--;
        } else {
            return false;
        }
    }

    return true;
}

const testcases = [
    [true, 'aa', 'aab'],
    [false, 'buff', 'fizz'],
    [true, 'qwerty', 'qwertyasdfgh'],
    [true, 'fal', 'flacon'],
    [true, 'fizz', 'zzif'],
];

runTestCases(loopSolution, testcases);
runTestCases(mapSolution, testcases);
