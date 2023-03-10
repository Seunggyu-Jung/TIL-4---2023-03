// 레벨 1: 나머지가 1이 되는 수 찾기, 두 정수 사이의 합, 정수 내림차순으로 정리, 하샤드 수
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n ; i++){
        if (n % i === 1){
            answer += i
            break;
        } 
    }
    return answer ;
}

// 두 정수의 합: 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
    var answer = 0;
    for (let i = Math.min(a,b) ; i <= Math.max(a,b) ; i++){
        answer += i;
    }    
    return answer;
}

// 정수 내림차순으로 배치하기 : 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
    let Num = [n]
    var answer = [...Num + ""].sort().reverse().join("");
    return parseInt(answer);
}