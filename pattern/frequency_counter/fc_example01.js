function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    // 시간 복잡도(Time Complexity = N^2) : 단일 loop처럼 보이지만, indexOf()의 동작 방식이 반복문 형태이다. 
    for (let i = 0; i < arr1.length; i++) {
        // indexOf(value) : value가 몇번째 인덱스에 있는지 인덱스 값을 반환 (해당 되는게 없으면 -1을 리턴)
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) return false;

        arr2.splice(correctIndex, 1);
    }

    return true;
}

console.log(same([1,2,3,2], [9,1,4,4]));