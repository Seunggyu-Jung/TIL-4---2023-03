/*
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
*/

// 다소 복잡함
function solution(arr, divisor) {
    var answer = arr.filter((el) => (el) % divisor === 0).length != 0 ? arr.filter((el) => (el) % divisor === 0).sort(function(a,b){return a - b}) : [-1]
    return answer;
}

console.log(solution([2, 36, 1, 3], 3)) // [ 3, 36 ]


// 초 간단식

function solution2(arr, divisor){
    let answer = arr.filter((el) => (el) % divisor === 0);
    return answer.length != 0 ? answer.sort(function(a,b){return a - b}) : [-1]   // return을 이용하여 보다 간단하게 작성 가능함
}

console.log(solution2([5, 9, 7, 10], 5)) // [ 5, 10 ]