function solution(nums){
    return nums.slice(0,3);
}

console.log(solution([100,200,300,400,500])) // [ 100, 200, 300 ]

// 다른 풀이 : 배열의 삭제메서드인 pop 사용

function solution2(nums){
    nums.pop();
    nums.pop();
    return nums;
}

console.log(solution2([100,200,300,400,500])) // [ 100, 200, 300 ]