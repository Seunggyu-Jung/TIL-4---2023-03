// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    let answer= s.split("");
    if (answer.filter((el) => (el) >= 0).length == answer.length) {
        if (answer.length === 4 || answer.length === 6) {  // 문자열의 길이가 4 또는 6 인것을 찾아야 함, 논리 연산자 쓸려면 식을 전부 써야함
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(solution("123456"))  //  true
console.log(solution("12345a"))  //  false