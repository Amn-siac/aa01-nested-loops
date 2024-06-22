/*
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array
(matrix) and returns all lucky numbers in any order. A lucky number is the
minimum element in its row and the maximum in its column.
*/



function luckyNumbers(matrix) {
    let arr = [];
    let lucky = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let largest = matrix[0][i];
        for (let k = 0; k < matrix.length; k++) {

            if (largest < matrix[k][i]) {
                largest = matrix[k][i];
            }
        }
        arr.push(largest);
    }
    let arr2 = [];
    for (let j = 0; j < matrix.length; j++) {
        let smallest = matrix[j][j];
        for (let l = 0; l < matrix[j].length; l++) {

            if (smallest > matrix[j][l]) {
                smallest = matrix[j][l];
            }
        }
        arr2.push(smallest);
    }
    for (let n = 0; n < arr.length || n < arr2.length; n++) {
        if (arr2.includes(arr[n])) {
            lucky.push(arr[n]);
        }
    }
    return lucky;
}

// matrix = [[5, 9, 21],
// [9, 19, 6],
// [12, 14, 15]]

// console.log(luckyNumbers(matrix)); // [12]

// matrix = [[5, 10, 8, 6],
// [10, 2, 7, 9],
// [21, 15, 19, 10]]

// console.log(luckyNumbers(matrix)); // [10]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = luckyNumbers;
