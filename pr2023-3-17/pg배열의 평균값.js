// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    var answer = 0;
    for (let i = 0; i<= numbers.length -1; i++){
        answer += numbers[i];
    }
    return answer / numbers.length;
}


// for(변수 of 매개변수) -> 매개변수를 하나씩 꺼내보는 for문

function solution(numbers) {
    var answer = 0;
    for(i of numbers) {
        answer += i
    }
    return answer / numbers.length;
}