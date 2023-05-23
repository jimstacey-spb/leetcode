
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

module.exports = {
    assert,
    runTestCases,
};