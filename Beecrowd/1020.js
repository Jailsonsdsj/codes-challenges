var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var data = lines.shift().split(" ");

let age = parseInt(data[0]);

const year = age/365|0;
age = age%365;
const mounth = age/30|0;
const day = age%30;

console.log(`${year} ano(s)\n${mounth} mes(es)\n${day} dia(s)`)