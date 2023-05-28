const {runTestCases} = require("./utils");

function divideSolution() {
    const result = [];

    for (let i = 1; i <= 100; i++) {
        const byThree = i % 3 === 0;
        const byFive = i % 5 === 0;

        if (!byFive && !byThree) {
            result.push(i.toString());
        } else if (byThree && byFive) {
            result.push('fizzbuzz');
        } else if (byThree) {
            result.push('fizz');
        } else {
            result.push('buzz');
        }
    }
    return result;
}

function incrementSolution() {
    const result = [];

    let fizz = 3;
    let buzz = 5;


    for (let i = 1; i <= 100; i++) {
        fizz--;
        buzz--;
        if (!fizz && !buzz) {
            result.push('fizzbuzz');
            fizz = 3;
            buzz = 5;
        } else if (!fizz) {
            result.push('fizz');
            fizz = 3;
        } else if (!buzz) {
            result.push('buzz');
            buzz = 5
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

const result = ['1', '2', 'fizz', '4', 'buzz', 'fizz', '7', '8', 'fizz', 'buzz', '11', 'fizz', '13', '14', 'fizzbuzz', '16', '17', 'fizz', '19', 'buzz', 'fizz', '22', '23', 'fizz', 'buzz', '26', 'fizz', '28', '29', 'fizzbuzz', '31', '32', 'fizz', '34', 'buzz', 'fizz', '37', '38', 'fizz', 'buzz', '41', 'fizz', '43', '44', 'fizzbuzz', '46', '47', 'fizz', '49', 'buzz', 'fizz', '52', '53', 'fizz', 'buzz', '56', 'fizz', '58', '59', 'fizzbuzz', '61', '62', 'fizz', '64', 'buzz', 'fizz', '67', '68', 'fizz', 'buzz', '71', 'fizz', '73', '74', 'fizzbuzz', '76', '77', 'fizz', '79', 'buzz', 'fizz', '82', '83', 'fizz', 'buzz', '86', 'fizz', '88', '89', 'fizzbuzz', '91', '92', 'fizz', '94', 'buzz', 'fizz', '97', '98', 'fizz', 'buzz']

runTestCases(divideSolution, [[result]]);
runTestCases(incrementSolution, [[result]]);
