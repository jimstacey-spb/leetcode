const {SLL, runTestCases} = require("./utils");

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const firstNumber = SLL.toNumber(l1);
    const secondNumber = SLL.toNumber(l2);
    let thirdString = (firstNumber + secondNumber).toString().split('');
    thirdString = thirdString.map((i) => parseInt(i));
    thirdString.reverse();
    return SLL.fromArray(thirdString);
};

const testcases = [
    [[7, 0, 8], [SLL.fromArray([2, 4, 3]), SLL.fromArray([5, 6, 4])]],
    [[0], [SLL.fromArray([0]), SLL.fromArray([0])]],
    [[8, 9, 9, 9, 0, 0, 0, 1], [SLL.fromArray([9, 9, 9, 9, 9, 9, 9]), SLL.fromArray([9, 9, 9, 9])]]
]

const test = (args) => {
    return SLL.toArray(addTwoNumbers(...args));
}

runTestCases(test, testcases);