/**
 * 고유값 세기 
 * 
 * Implement a function called "countUniqueValues", which accepts a sorted array, and counts the unique values in the array. 
 * There can be negative numbers in the array, but it will always be sorted.
 * 
 * 
 * - 조건 : 항상 정렬된 배열이어야 한다. , 배열에는 음수가 있을 수도 있다.
 * 
 * TC : O(N)
 * 
 * ex) [1,1,1,2,2,3,4,5,5,5,6,6,7]
 * 
 */
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            // i를 1칸 이동 후, i배열이 j배열과 같다고 지정.
            i++;
            arr[i] = arr[j];
        }
    }
    // index값 + 1을 반환 
    return i + 1;
}

console.log(countUniqueValues([1,3,3,3,5,6,7]));