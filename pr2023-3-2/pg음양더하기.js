/*
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
*/

function solution(absolutes, signs) {
    
    var answer = 0;
    for (let i = 0; i <= absolutes.length - 1; i ++){
        if (signs[i] === true) {
            answer += absolutes[i]
        } else {
            answer -= absolutes[i] 
        }
    }
    return answer;
}

console.log(solution([5,8,20], [true, false, true]))  // 17

// 다른 식: forEach((v,i)) => {})

function solution2(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((v, i) => {
        if (signs[i]) {
            answer += v;
        } else {
            answer -= v;
        }
    })
    return answer;
}

console.log(solution2([4,7,9], [true, true, false]))  //  2

