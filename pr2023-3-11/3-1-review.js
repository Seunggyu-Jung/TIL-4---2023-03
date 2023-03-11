// 레벨 1: 나누어 떨어지는 숫자 배열
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요. divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
    var answer = [...arr].filter((el) => (el) % divisor === 0).length >= 1 ? [...arr].filter((el) => (el) % divisor === 0).sort(function(a,b) {
        return a - b
    }) : [-1];
    return answer;
}

// 간단식

function solution(arr, divisor) {
    var answer = [...arr].filter((el) => (el) % divisor === 0);
    return answer.length == 0 ? [-1]  : answer.sort((a,b) => a - b);  // sort()를 더욱 간단하게 쓸 수 있음
}


// 레벨 1: 서울에서 김서방 찾기
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
    var answer = seoul.findIndex((el) => (el) === "Kim");
    return `김서방은 ${answer}에 있다`;
}

// 레벨 1: 핸드폰 번호 가리기
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다. 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
    return [...phone_number].fill("*",0,phone_number.length -4).join("");
}

// 레벨 0 : 팩토리얼
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

