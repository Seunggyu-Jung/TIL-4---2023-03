// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

function solution(n) {
    var answer = 0;
    for(let i =1;i <= n ; i++){
        if ((6*i) % n === 0){
            answer = i;
            break;   // 여기서 break로 탈출하지 않으면 가장 마지막 요소를 출력
        }
    }
    return answer;
}    // while 문으로도 풀 수 있으니 함께 알아 둘것


// while 문 풀이 (큰 차이는 없으나, 알아서 나쁠건 없음)

function solution (n) {
	let pizza = 6;
	while (true) {
			if (pizza % n === 0) {
							return pizza/6;
      }  
					pizza += 6;
   }
}   