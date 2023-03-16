// Q. 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.


function solution(s) {
    let str = s.split("").sort();
    let answer = ""
    if (str[0] != str[1]){
        answer += str[0];
    } else {
        answer = "";
    }
    for (let i = 1; i <= str.length - 1; i++){
        if (str[i] != str[i - 1]){
            if (str[i] != str[i+1]){
                answer += str[i];
            }
        }
    }
    return answer;
}

// 해설:
// 1단계. 매개변수가 문자열로 묶여있기 때문에, split("") 으로 쪼개고, sort()로 알파벳 순서대로 나열함
// 2단계. 이 문제의 경우, 앞뒤의 문자를 비교해서 앞뒤 모두 다른 문자를 출력해야하기에,
// for (let i = 1; i <= str.length - 1; i++){ if (str[i] != str[i - 1]){ if (str[i] != str[i+1]){ answer += str[i]; } } } 로 작성!!
// 3단계. 이러면 0번째 문자를 검사 할 수 없기때문에 맨 앞에
// if (str[0] != str[1]){ answer += str[0]; } else { answer = ""; } 로 0번째 문자를 검사
