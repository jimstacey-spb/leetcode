const {runTestCases} = require("./utils");
const fibonacciRow = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 3,
    5: 5,
    6: 8,
    7: 13,
    8: 21,
    9: 34,
    10: 55,
    11: 89,
    12: 144,
    13: 233,
    14: 377,
    15: 610,
    16: 987,
    17: 1597,
    18: 2584,
    19: 4181,
    20: 6765,
}

function loopSolution(num) {
    const row = [0, 1];
    let i = 2;
    while (i <= num) {
        row.push(row[row.length - 1] + row[row.length - 2]);
        i++;
    }
    return row[num];
}

function recursiveSolution(num, row = [0, 1]) {
    if (num < row.length) {
        return row[num];
    }
    row.push(row[row.length - 1] + row[row.length - 2]);
    row = recursiveSolution(num, row);
    return row;
}

function tinyLoopSolution(num) {
    if (num === 0) return 0;
    const row = [0, 1];
    let i = 2;
    while (i <= num) {
        row.push(row[row.length - 1] + row[row.length - 2]);
        row.shift();
        i++;
    }
    return row[1];
}

const testcases = [
    [fibonacciRow[0], 0],
    [fibonacciRow[1], 1],
    [fibonacciRow[5], 5],
    [fibonacciRow[15], 15],
]
runTestCases(loopSolution, testcases);
runTestCases(tinyLoopSolution, testcases);
runTestCases(recursiveSolution, testcases);