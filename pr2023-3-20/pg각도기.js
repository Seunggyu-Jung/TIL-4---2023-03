// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

function solution(angle) {
    return angle === 180 ? 4 : angle > 90 && angle < 180 ? 3 : angle === 90 ? 2 : 1;
}

// 좀 더 간단히!!

function solution(angle) {
    return angle === 180 ? 4 : angle === 90 ? 2 : angle < 90 ? 1 : 3;
}
