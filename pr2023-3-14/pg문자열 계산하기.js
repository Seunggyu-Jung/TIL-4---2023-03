// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

function solution(my_string) {
    let answer = my_string.split(" ");  // 문자열이 공백으로 나뉘어져있어 split(" ")으로 분리하면 배열로 정리됨 
    let result = parseInt(answer[0]);   // answer의 첫번째 요소는 + - 상관이 없기에 미리 넣어줌
    for (let i = 1 ; i <= answer.length -1; i++){
        if (answer[i] == "+") {   // 요소를 반복하여 +와 -를 찾아 그 다음 요소가 할 연산을 지정 
            result += parseInt(answer[i + 1]);
        } else if (answer[i] == "-"){
            result -= parseInt(answer[i + 1]);
        }
    }
    return result;
}

console.log(solution("4 - 3"))  // 1