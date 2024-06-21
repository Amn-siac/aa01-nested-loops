/*
Write a function zanyZip that accepts two arrays as arguments. The function
should return a two dimensional array with subarrays of length 2 that contain
elements at corresponding indices from the input arrays. If one of the arrays is
shorter than the other, then substitute null for the missing elements.
*/

function zanyZip(arr1, arr2) {
    let zip = [];
    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
        let inputArr = [];
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] === undefined) {
                arr1[i] = null;
            }
            if (arr2[i] === undefined) {
                arr2[i] = null;
            }
        }
        inputArr.push(arr1[i], arr2[i]);
        zip.push(inputArr)
    }
    return zip;
}

// console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

// console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

// console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = zanyZip;
