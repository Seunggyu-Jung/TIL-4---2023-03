/*
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
    let ans = 1;
    let answer;
    for (let i = 1 ; i <= n ; i++){
        ans *= i;
        if (ans === n){
            answer = i
            break;
        } else if (ans > n){
            answer = i - 1
            break;
        }
    }
    return answer
}

console.log(solution(23131243)) //  10