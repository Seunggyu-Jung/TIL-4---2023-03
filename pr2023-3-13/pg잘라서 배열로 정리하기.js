// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    var answer = [];
    let Num = "";
    for(let i =0; i <=my_str.length -1 ; i++) {
    Num += my_str[i];
    if (Num.length === n) {
        answer.push(Num)
        Num = ""
    }
    }
    if (Num.length >= 1){
    answer.push(Num);   
    }
    return answer;
}

console.log(solution("abc1Addfggg4556b", 5)) // [ 'abc1A', 'ddfgg', 'g4556', 'b' ]