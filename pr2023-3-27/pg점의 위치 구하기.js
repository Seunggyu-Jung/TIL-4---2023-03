// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다. x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

function solution(dot) {
    return dot[0] > 0 && dot[1] >0 ? 1 : dot[0] < 0 && dot[1] < 0 ? 3 : dot[0] < 0 && dot[1] >0 ? 2 : 4;
}

// 다른 풀이 : 구조 분해 할당을 이용하여 해결

function solution(dot) {
    let answer;
    const [x, y] = dot;
    if (x > 0 && y >0) {
        answer = 1;
    } else if (x < 0 && y > 0) {
        answer = 2;
    } else if (x < 0 && y < 0) {
        answer = 3;
    } else {
        answer = 4;
    }
    return answer;
}