// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

let arr = [200, 100, 300];
arr.splice(2, 0, 10000)
console.log(arr)  // [ 200, 100, 10000, 300 ]

// splice(start, delete, push) : 변화시킬 배열의 인덱스(start)에서 제거할 요소의 수(delete)만큼 제거하고, push를 넣는다. 여기서 delete가 0이면 아무것도 안 없앤다.