
var first = 5;
var second = 7;
console.log(first, second);

// first approache 

// var temp = first;
// first = second;
// second = temp;

// console.log(first, second);

// distructing 

[first, second] = [second, first];
console.log(first, second);