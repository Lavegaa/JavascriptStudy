//---------------------------------------------------------------------------------------
//문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
//s의 길이는 1 이상 5이하입니다.
//s의 맨앞에는 부호(+, -)가 올 수 있습니다.
//s는 부호와 숫자로만 이루어져있습니다.
//s는 0으로 시작하지 않습니다.
//---------------------------------------------------------------------------------------

//내 풀이
function solution(s) {
  let answer = 0;
  let sub = s.substr(0);
  let state = true;
  let num = 0.1;
  for (let i in sub) {
    num = num * 10;
  }
  if (sub[0] == "-") {
    num = num / 10;
    state = false;
    sub = s.substr(1);
  } else if (sub[0] == "+") {
    num = num / 10;
    sub = s.substr(1);
  }
  for (let i in sub) {
    if (!state) {
      answer = answer - sub[i] * num;
    } else {
      answer = answer + sub[i] * num;
    }
    num = num / 10;
  }
  return answer;
}

//멋진 풀이

function strToInt(str) {
  return str / 1;
}

//도중에 콘솔에 '1'/2를 해서 0.5가 나왔으나 해당 방법은 생각해보지 못함....

//멋진 풀이2

function strToInt(str) {
  return +str;
}

//int to string => ""+int
//string to int => +string

//멋진 풀이3
function strToInt(str) {
  let result = 0;
  //함수를 완성하세요
  result = Number(str);
  return result;
}
