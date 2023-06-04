const {runTestCases, generateRandomIntegerArray} = require("./utils");

function bubblesort (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

const case1 = generateRandomIntegerArray(5);
const case2 = generateRandomIntegerArray(10);
const case3 = generateRandomIntegerArray(100);
const testcases = [
    [case1.sort((a,b) => a-b), case1],
    [case2.sort((a,b) => a-b), case2],
    [case3.sort((a,b) => a-b), case3],
]

runTestCases(bubblesort, testcases);