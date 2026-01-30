// Union , Type Alias , Literal Types
// Union :- | (using to define multiple types)
// const fun = (num1: string | number, num2: string | number) => {
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number") {
//         result = num1 + num2
//     }
//     else {
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }
// const ans = fun("zaid", "malik")
// console.log(ans)
// Literal Types :- iska matlab hai apna khud ka type bna dena
function login(role) {
    if (role === "admin") {
        console.log("Hi admin");
    }
    else if (role === "user") {
        console.log("Hi user");
    }
}
login("admin");
