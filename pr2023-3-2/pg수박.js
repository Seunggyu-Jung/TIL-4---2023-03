/*
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
*/

function solution(n) {
    var answer = '';
    for (let i = 1 ; i <= n ; i++){
        if (i % 2 === 0){
            answer += "박"
        } else {
            answer += "수"
        }
    }
    return answer;
}

console.log(solution(5))  // 수박수박수


// 요약식

function solution2(n) {
    var answer = '';
    for (let i = 1 ; i <= n ; i++){
        i % 2 === 0 ? answer += "박" : answer += "수"   // 삼항 연산자로 요약 가능
    }
    return answer;
}

console.log(solution2(6))  // 수박수박수박