// 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(letter) {
    let addition = "";
    var answer = '';
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};
    for (let i = 0 ; i <= letter.length - 1; i++){
        if (letter[i] != " ") {
            addition += letter[i];   // object의 value값을 추출하는 방법 : object변수[value값]
        } else {
            answer += morse[addition];
            addition = "";
        }
    }
    answer += morse[addition];
    return answer;
}

console.log(solution(".--. -.-- - .... --- -."))  // python