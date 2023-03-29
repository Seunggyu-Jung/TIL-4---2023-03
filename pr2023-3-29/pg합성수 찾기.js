// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    var answer = 0;
    let item = [];
    for (let i = n; i >= 3; i--){
        for (let j = i; j >= 1; j--){
            if (i % j === 0) {
                item.push(j);
            }
        }
        if (item.length >= 3) {
                answer += 1;
                item = [];
            }
        }
    return answer;
}

// 다른 모범 풀이

function solution(n) {
    let answer = 0;
    for (let i = n; i>= 1; i--){
    let isCount = false;
    for (let num = 2; num <= i-1; num++){
        if (i % num === 0) {
            isCount = true;
        }
    }
    if (isCount) {
        answer += 1;
    }   
    }
    return answer;
}