//---------------------------------------------------------------------------------------
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
//---------------------------------------------------------------------------------------

//내 풀이
function solution(n) {
  let answer = [];
  let num = "" + n;
  for (let i = num.length; i > 0; i--) {
    answer.push(num.slice(i - 1, i) / 1);
  }
  return answer;
}

//멋진 풀이 1
//""+num이 아닌 num.toString()으로 정수를 문자열로 바꿀 수 있다.
//split("")함수를 이용해 각 자리마다 끊어서 저장.
//reverse()함수를 통해 뒤집고
//map함수를 통해 배열을 다시 만든다.
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map(o => (o = parseInt(o)));
}

//parseInt 문자열 인수를 int로 형변환
//내 풀이에 parseInt활용하기
function solution(n) {
  let answer = [];
  for (let i = n.toString().length; i > 0; i--) {
    answer.push(parseInt(n.toString().slice(i - 1, i)));
  }
  return answer;
}

//자바스크립트 함수를 사용하는것이 for문을 도는것보다 오래걸렸음. 케이스가 적어서 그런지 내장함수가 무거운지 알아봐야겠다.
