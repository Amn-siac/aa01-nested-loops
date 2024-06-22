/*
Write a function spiralOrder(matrix) that takes in a 2-dimensional array
(matrix) and returns an array containing the elements in spiral order.
*/


function spiralOrder(matrix) {
    // inner [constant][increase]
    // outer [increase][constant]
    // inner [constant][decrease]
    // outer [decrease][constant]
    // inner [constant][increase]

    let bounds = matrix.join().split(',').length;
    let arr = [];
    let index = 0;
    while (index < bounds) {
        if (arr.length < matrix[0].length) {
            for (let i = 0; i < matrix[0].length; i++) {
                arr.push(matrix[0][i])
                index++
            }
        } else if (index >= matrix[0].length && index < matrix[0].length + matrix.length - 1) {
            for (let j = 1; j < matrix.length; j++) {
                arr.push(matrix[j][matrix[0].length - 1])
                index++
            }
        } else if (index < matrix[0].length * 2) {
            for (let k = matrix[0].length - 1; k > 0; k--) {
                arr.push(matrix[matrix.length - 1][k - 1])
                index++
            }
        } else if (index < bounds) {
            for (let l = 0; l < matrix[0].length - 1; l++) {
                arr.push(matrix[matrix.length - 2][l])
                index++
            }
        }
    }
    return arr;
}

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]

// matrix = [[1, 2, 3, 4, 20],
// [5, 6, 7, 8, 21],
// [9, 10, 11, 12, 22]]
// console.log(spiralOrder(matrix));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = spiralOrder;
