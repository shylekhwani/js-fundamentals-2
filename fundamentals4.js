// Ans 1
const num = 25;
const check = num % 2 === 0 ? "even" : "odd";
console.log(check);

//Ans 2
/*
In JavaScript, the comma operator , is used to combine multiple expressions into a single expression. 
It evaluates each expression from left to right and returns the value of the rightmost expression. 
While the individual expressions are evaluated, the comma operator itself is used to separate them.
*/
let x = 1,
  y = 2,
  z = 3;
console.log(x, y, z);

//Ans 3
let num2 = 5;
const tocheck = num2 >= 0 ? "positive" : num2 <= 0 ? "zero" : "negative";
console.log(tocheck);

//Ans 4
const age = 18;
const eligbleforvote = age >= 18 ? "You can vote" : "You cant Vote";
console.log(eligbleforvote);
