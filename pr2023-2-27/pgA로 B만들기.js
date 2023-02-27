/*
문자열 before와 after가 매개변수로 주어질 때, 
before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
*/
// arr1.every((value, index) => value === arr2[index]) : arr1과 arr2의 객체를 하나씩 비교하는 메서드 
function solution(before, after) {
    let be = [...before].sort()
    let af = [...after].sort()
    let answer = be.length === af.length && be.every((v,i) => v === af[i]) ? 1 : 0
    return answer;
}

console.log(solution("hello", "elloh"))  // 1 

// 초 간단식

function solution2(before, after) {
    let answer = [...before].sort().join("") === [...after].sort().join("") ? 1 : 0  // 다시 join메서드로 합쳐버림
    return answer
}

console.log(solution2("hello", "elloh"))  // 1

