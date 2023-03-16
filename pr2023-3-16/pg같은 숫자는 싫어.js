// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

function solution(arr)
{   
    let answer = [];
    for (let i =0 ; i <= arr.length -1; i++){
        if (arr[i] != arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}


// 해설: 
// 1단계. 순서는 상관이 없기에 바로 for (let i =0 ; i <= arr.length -1; i++) 로 반복문 작성
// 2단계. 현재의 숫자와 다음에 올 숫자가 다를 때, 현재 숫자를 빈 배열에 push함
// 3단계. 마지막 arr[arr.length - 1] != arr[arr.length]에서 arr[arr.length]은 undefinded이기 때문에 arr[arr.length - 1]가 깔끔하게 들어감