const fs = require('fs');

let data = fs.readFileSync('./input.txt');
data = data.toString().split(/\r?\n/);
const [a,b] = data[0].split(' ');
const sum = (+a) + (+b);
fs.writeFileSync('./output.txt', sum + '')