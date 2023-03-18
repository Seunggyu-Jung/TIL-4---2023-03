//  나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

function solution(age) {
    return 2022 - age + 1;
}

function solution(age) {
    return new Date().getFullYear() - age + 1; // new Date() 메서드는 프로젝트에 참 많이 쓰이는 메서드라 공부하고 가면 좋습니다.
}