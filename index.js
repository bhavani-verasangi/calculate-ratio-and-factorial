const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfTwoNumbers = require("../factorial/index");

const rationAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfTwoNumbers(num3);
  return { ratio, factorial };
};

module.exports = rationAndFactorial;
