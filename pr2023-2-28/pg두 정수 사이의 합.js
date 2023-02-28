/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
    let answer = 0;
    let Num = [a,b].sort(function(a,b){
        return a - b
    })
    for (let i = Num[0] ; i <= Num[1] ; i++){
        if (a != b){
            answer += i;
        } else {
            answer += a;
        }
    }
    return answer;
}

console.log(solution(7,10)) // 34 