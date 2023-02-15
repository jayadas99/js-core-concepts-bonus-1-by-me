// function add(num1, num2){
//     console.log(num1, num2);
// }
// // add(12, 13);
// add(12, 13, 45, 89, 78);


function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
}
// add(12, 13);
add(12, 13, 45, 89, 78);

// array like object below:
// [Arguments] { '0': 12, '1': 13, '2': 45, '3': 89, '4': 78 }
// Push, pop chalate parbo na. for of chalate parbo er upor
// **********************************************

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments[3]);
}
// add(12, 13);
add(12, 13, 45, 89, 78);
