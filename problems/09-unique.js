/*
Write a function unique that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.
*/

// function unique(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let k = 0; k < arr.length; k++) {
//             if (newArr.includes(arr[i]) !== true) {
//                 newArr.push(arr[i])
//             }
//         }
//     }
//     return newArr;
// } REDO THIS CODE

function unique(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let boolean = true;
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] === arr[i]) {
                boolean = false;
            }
        }
        if (boolean) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


// console.log(unique([1, 1, 2, 3, 3]));         // [1, 2, 3]
// console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
// console.log(unique(["a", "b", "c", "b"]));    // ['a', 'b', 'c']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = unique;
