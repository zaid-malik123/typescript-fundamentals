var printSum = function (num1, num2, text) {
    return "".concat(text, " ").concat(num1 + num2);
};
var text = "Sum number is :- ";
var res = printSum(5, 10, text);
console.log(res);
