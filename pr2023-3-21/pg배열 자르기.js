// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2 + 1);
}

// arr.slice(a, b 바로 앞) : 배열의 요소 인덱스 a번째 부터 b번째 바로 앞까지 추출하기에 +1을 반드시 해줘야함