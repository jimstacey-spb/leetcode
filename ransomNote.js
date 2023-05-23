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
    let mi = magazine.length;
    while (mi--) {
        if (!magazineMap[magazine[mi]]) {
            magazineMap[magazine[mi]] = 1;
        } else {
            magazineMap[magazine[mi]] += 1;
        }
    }

    let ri = ransomNote.length;
    while (ri--) {
        if (magazineMap[ransomNote[ri]]) {
            magazineMap[ransomNote[ri]]--;
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
