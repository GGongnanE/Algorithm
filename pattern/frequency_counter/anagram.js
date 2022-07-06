
/**
 *  anagram 
 * 
 *  ex) 'aaz' 'zza'        // true
 *      'sdfwer' 'rewsdf'  // true
 *      'rat'  'car'       // false
 * 
 *      // 입력 = 문자
        // 출력 = boolean (true / false)
 * 
 */

function validAnagram(inpStr1, inpStr2){
    
    if (inpStr1.length !== inpStr2.length) { return false; }

    // 빈도 카운터 처리 객체 
    const lookup = {};    

    // json 객체 생성 해서 키 밸류 형태로 {'문자' : 갯수} 처리 
    for (let i = 0; i < inpStr1.length; i++) {
        let letter = inpStr1[i];
        // 만약 글자가 존재하면 갯수 1증가, 없으면 1로 설정 
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // 빈도 카운터 처리 객체(lookup)와 두번째 문자열(inpStr2)을 비교
    for (let i = 0; i < inpStr2.length; i++) {
        let letter = inputStr2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}