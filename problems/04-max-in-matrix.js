/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) {
  let largest = matrix[0][0]
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (largest < matrix[i][k]) {
        largest = matrix[i][k];
      }
    }
  }
  return largest;
}

// matrix = [
//   [11, 2, -99],
//   [20, 19, 10],
//   [47, 72, 56],
// ];

// console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
