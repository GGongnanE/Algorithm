/**
 * 
 * 기존 중첩 루프를 개별 루프로 변경 (O(n))
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns boolean
 */

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // input param의 각 값을 key, 몇 개 존재하는지에 대한 빈도를 value로 설정(JSON 방식 객체로)
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

console.log(same([1,2,3,4], [16,4,9,1]))