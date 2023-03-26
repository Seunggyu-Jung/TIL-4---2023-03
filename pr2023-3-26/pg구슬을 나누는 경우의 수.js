// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

function solution(balls, share) {
    let Up = 1;
    let Front = 1;
    let End = 1;
    for (let i = balls; i >= 1; i--) {  // 왜 오름차순으로 하면 오류가 생기는 것일까..?
        Up = Up * i;
    }
    for (let j = balls - share; j >= 1; j--) {
        Front = Front * j;
    }
    for (let h = share; h >= 1; h--) {
        End = End * h;
    }
    return balls - share === 0 ? 1 : Math.round(Up / (Front * End)) ;  // 소숫점계산에서 0.1 + 0.2 != 0.3 이며 0.1 + 0.2 === 0.30000000000000004 이다. 이는 컴퓨터는 10진법이 아닌 2진법으로 계산을 하기 때문. 이 경우, Math.round()로 반올림처리 해주면 오류가 발생하지 않는다.
}