//---------------------------------------------------------------------------------------
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
//단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
//---------------------------------------------------------------------------------------

//내 풀이
function solution(s) {
  let answer = "";
  if (s.length % 2 == 0) {
    answer = s.substr(s.length / 2 - 1, 2);
  } else {
    answer = s.substr(s.length / 2 - 0.5, 1);
  }
  return answer;
}

//멋진 풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

//멋진 풀이2
function solution(s) {
  return s.length % 2 == 0
    ? s.substr(s.length / 2 - 1, 2)
    : s.substr(Math.floor(s.length / 2), 1);
}
