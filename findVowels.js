const {runTestCases} = require("./utils");
const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
const vowelsHashmap = vowelsArray.reduce((obj, v) => {
    obj[v] = true;
    return obj;
}, {});
const vowelsRegexpString = new RegExp(`[${vowelsArray.join('')}]`, 'gi');
function includesSolution(str) {
    let counter = 0;
    for (let char of str.toLowerCase()) {
        if (vowelsArray.includes(char)) {
            counter++;
        }
    }
    return counter;
}

function hashmapSolution(str) {
    let counter = 0;
    for (let char of str.toLowerCase()) {
        if (vowelsHashmap[char]) {
            counter++;
        }
    }
    return counter;
}

function regexpSolution(str) {
    const result = str.match(vowelsRegexpString);
    return result ? result.length : 0;
}

const testcases = [
    [2, 'abcde'],
    [10, 'aaachelovekmolekula'],
    [0, '2134fghfgh'],
    [5, 'auoei']
]

runTestCases(includesSolution, testcases);
runTestCases(hashmapSolution, testcases);
runTestCases(regexpSolution, testcases);