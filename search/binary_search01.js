/**
 *  Pseudo code 
 * 
 *  1. This function accepts a sorted array and a value (Only use number)
 *  2. Create a left pointer at the start of the array, and a right pointer at the end of the array.
 *  3. while the left pointer comes before the right pointer:
 *      1) Create a pointer in the middle.
 *      2) If you find the value you want, return the index. 
 *      3) If the value is too small, move the left pointer up.
 *      4) If you value is too large, move the right pointer down. 
 *  4. If you never find the value, return -1. 
 */

function binarySearch(inputArr, targetNum) {
    let arr = inputArr.sort();     // [1, 2, 3, 4, 5]

    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);   // floor() : 반내림

    while (arr[middle] !== targetNum) {
        if (targetNum < arr[middle]) {  
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === targetNum) {
        return middle;
    } else {
        return -1;
    }
}

// 데이터가 정렬되어 있을 경우, 이진검색이 유용할 수 있다. 
console.log(binarySearch([5,4,2,1,3], 4));