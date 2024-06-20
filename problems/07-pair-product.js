/*
Write a function pairProduct that accepts an array of numbers and a product as
arguments. The function should return a boolean indicating whether or not a pair
of distinct elements in the array result in the product when multiplied
together.
You may assume that the input array contains unique elements.
*/

function pairProduct(nums, product) {
    let arrow = false;
    for (let i = 0; i < nums.length; i++) {
        let tempPro = 0;
        let one = nums[i];
        for (let k = i + 1; k < nums.length; k++) {
            let two = nums[k];
            tempPro = one * two;
            if (tempPro === product) {
                return true;
            }
        }
    }
    return arrow;
}

// console.log(pairProduct([4, 2, 5, 8], 16));    // true
// console.log(pairProduct([8, 1, 9, 3], 8));     // true
// console.log(pairProduct([3, 4], 12));          // true
// console.log(pairProduct([3, 4, 6, 2, 5], 12)); // true
// console.log(pairProduct([4, 2, 5, 7], 16));    // false
// console.log(pairProduct([8, 4, 9, 3], 8));     // false
// console.log(pairProduct([3], 12));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairProduct;
