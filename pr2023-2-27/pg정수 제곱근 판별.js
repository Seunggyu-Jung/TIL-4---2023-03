/*
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
*/

function solution(n) {
    var answer = Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1)**2 : -1   // Math.sqrt():제곱근을 구하는 메서드 , n**2 : n의 제곱
    return answer;
}

console.log(solution(144))  // 13**2 = 169