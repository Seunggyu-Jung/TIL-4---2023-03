// 레벨 0 : A로 B만들기
//문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(before, after) {
    var answer = [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
    return answer;
}

// 레벨 1: 정수 제곱근 판별 , X만큼 간격있는 n개의 숫자, 문자열 정수로 바꾸기

// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
function solution(n) {
    var answer = Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1)**2 : -1;
    return answer;
}

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++){
        answer.push(x*i);
    }
    return answer;
} 

// 초 간단식

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

function solution(s) {
    var answer = parseInt(s);
    return answer;
}



