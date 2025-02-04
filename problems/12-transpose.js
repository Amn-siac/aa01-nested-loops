/*
Define a function called `transpose that accepts a two-dimensional array as a
parameter and returns a new version of the array with its columns and rows
switched. See test cases for examples.
*/

function transpose(twoDArr) {
    let matrix = [];
    console.log(twoDArr)
    for (let i = 0; i < twoDArr[0].length; i++) {
        let arr = [];
        for (let j = 0; j < twoDArr.length; j++) {
            let trans = twoDArr[j][i];
            arr.push(trans);
        }
        matrix.push(arr);
    }
    return matrix;
}

// let arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// console.log(transpose(arr1)); // prints: [
// //           [1, 4, 7],
// //           [2, 5, 8],
// //           [3, 6, 9]
// //         ]

// let arr2 = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];
// console.log(transpose(arr2)); // prints: [
// //           [1, 3, 5],
// //           [2, 4, 6],
// //         ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = transpose;
