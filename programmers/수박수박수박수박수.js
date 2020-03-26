//---------------------------------------------------------------------------------------
// 길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
//---------------------------------------------------------------------------------------

//내 풀이
function solution(n) {
  let answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      answer += "수";
    } else if (i % 2 == 0) {
      answer += "박";
    }
  }
  return answer;
}

//멋진 풀이 1
//n이 10000까지였기 때문에 올바르진 않은 풀이. 다음 멋진 풀이에서 보완
function waterMelon(n) {
  let result =
    "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박";
  //함수를 완성하세요

  return result.substring(0, n);
}

//멋진 풀이 2
//repeat함수를 이용해 수박을 늘림.  repeat(count) count만큼 반복해서 문자열을 붙임.
//substr(a,b)  a부터시작해서b까지 글자를 자름
function waterMelon(n) {
  let result = "수박";
  result = result.repeat(n - 1).substring(0, n);
  //함수를 완성하세요

  return result;
}

//멋진 풀이 3
function waterMelon(n) {
  // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
  return "수박".repeat(n / 2) + (n % 2 ? "수" : "");
}
