
function assert (args, expected) {
    args = [...args];
    const callback = args.shift();
    const result = callback(...args);
    const successful = JSON.stringify(result) === JSON.stringify(expected);

    if (successful) {
        console.log(`Success! Result: ${result}. Expected: ${expected}. Arguments: ${args.join(', ')}`);
    } else {
        console.error(`Failed! Result: ${result}. Expected: ${expected}. Arguments: ${args.join(', ')}`);
    }
}

function runTestCases(method, testcases) {
    console.log(method.name);

    testcases.forEach((testcase) => {
        testcase = [...testcase];
        const expected = testcase.shift();
        let args = [method, ...testcase];
        assert(args, expected);
    })
}

/**
 * Definition for singly-linked list.
 * @typedef {Object} ListNode
 * @property {number} val
 * @property {(ListNode|null)} next
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const SLL = {
    /**
     * @param {array} arr
     * @return ListNode
     */
    fromArray: (arr) => {
        arr = [...arr].reverse();
        let result = undefined;
        for (let i = 0; i < arr.length; i++) {
            result = new ListNode(arr[i], result);
        }
        return result;
    },
    /**
     * @param {ListNode} l
     * @return array
     */
    toArray(l) {
        let list = {...l};
        const arr = [];
        while (list.hasOwnProperty('val')) {
            arr.push(list.val);
            list = {...list.next};
        }
        return arr;
    },
    /**
     * @param {ListNode} l
     * @return number
     */
    toNumber(l) {
        let list = {...l};
        let string = '';
        while (list.hasOwnProperty('val')) {
            string += list.val;
            list = {...list.next};
        }
        return parseInt(string);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomIntegerArray (l) {
    const result = [];
    for (let i = 0; i < l; i++) {
        result.push(getRandomInt(100));
    }
    return result
}

module.exports = {
    assert,
    runTestCases,
    ListNode,
    SLL,
    getRandomInt,
    generateRandomIntegerArray,
};