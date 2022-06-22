/**
 *  공간 복잡도 사전 참고사항 
 * 
 *  1. n이 커질수록 무한대까지 도달해가는 과정에서 입력 자체가 커진다고 가정한다. (입력값이 차지하는 공간은 관심없다.)
 *  2. 보조 공간복잡도(auxiliary space complexity) : 입력데이터를 제외하고 알고리즘 자체가 필요로 하는 공간 -> 알고리즘 자체에 집중한다.
 * 
 * 
 *  공간복잡도 기본 규칙 
 *  1. booleans, 숫자, undefined, null은 모두 불변의 공간이다.
 *      -> 입력데이터의 크기와는 상관 없다.
 *  2. 문자열은 O(n)의 공간이 필요하다. 
 *     ex) 어떤 문자열이 50글자라면 길이가 한글자인 문자열보다 50배 더 많은 공간을 차지한다.
 *  3. reference 타입, 배열과 객체도 마찬가지다. -> O(n)
 *  
 */

function sum(arr) {
    let total = 0;
    for (let i = 0; index < arr.length; i++) {
        total += arr[i];
    }
    return total;
}