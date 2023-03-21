// 배열에 적혀있는 숫자를 문자로 전환

function solution(age) {
    var answer = '';
    let alpha = ["a", "b", "c", "d", "e","f","g","h","i","j"] ;
    let num = (age + "").split("");  // 숫자 매개변수 age를 string으로 만들고, 다 쪼개서 배열로 만듦 
    for (let i = 0; i <= num.length -1 ; i++){
        answer += alpha[num[i]];   // 문자열이 된 age의 인덱스가 언급하는 숫자를 alpha변수의 인덱스로 사용하여 문자를 만듦 
    
    }
    return answer;
}