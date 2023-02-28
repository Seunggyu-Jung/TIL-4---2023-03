/*
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

function solution(x) {
    let ans;
    let answer = 0;
    let Num = [...x + ""];
    for (let i = 0 ; i <= Num.length - 1; i++) {
        answer += parseInt(Num[i])
        if (x % answer === 0){
            ans = true;
        } else {
            ans = false;
        }
    }
    return ans;
}

console.log(solution(121))  // false