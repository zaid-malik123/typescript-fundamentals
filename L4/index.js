// function type and return type
// const sayHii = (greet : string) : string => {
//     return `${greet} zaid malik`
// }
// const res = sayHii("Hii")
// console.log(res)
function add(num1, num2, cb) {
    var res = num1 + num2;
    cb(res);
}
add(5, 5, function (res) {
    console.log(res);
});
