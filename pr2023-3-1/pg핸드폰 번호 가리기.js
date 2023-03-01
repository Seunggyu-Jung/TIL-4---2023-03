/*
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
*/

function solution(phone_number) {
    var answer = [...phone_number].slice(0,-4).fill("*").join("") + [...phone_number].slice(-4).join("");
    return answer;
}

console.log(solution("0102943923")) // ******3923

// 초 간단식 

function solution2(phone_number){
    return [...phone_number].fill("*",0, phone_number.length - 4).join("");  // fill(채울것, 시작할 인덱스, 끝낼 인덱스) : 해당 범위만큼 채우는 방법
}

console.log(solution2("01046385359")) // *******5359