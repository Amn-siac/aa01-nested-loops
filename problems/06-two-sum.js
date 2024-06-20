/*
Write a function twoSum(arr, target) that accepts an array and a target number
as args. The function should a return a boolean indicating if two distinct
numbers of the array add up to the target value. You can assume that input array
contains only unique numbers.
*/

function twoSum(arr, target) {
    let arrow = false;
    for (let i = 0; i < arr.length; i++) {
        let tempSum = 0;
        let one = arr[i];
        for (let k = i + 1; k < arr.length; k++) {
            let two = arr[k];
            tempSum = one + two;
            if (tempSum === target) {
                return true;
            }
        }
    }
    return arrow;
}

// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8));    // true
// console.log(twoSum([4, 6, 2, 3], 11));   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoSum;
