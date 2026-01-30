
const printSum = (num1: number, num2: number, text: string) => {
    return `${text} ${num1 + num2}`;
}

const text = "Sum number is :- "
const res = printSum(5, 10, text)
console.log(res)