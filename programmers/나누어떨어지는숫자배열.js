//----------------------------------------------------------------------------------------------------------------
//array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
//divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
//----------------------------------------------------------------------------------------------------------------

//내 풀이
function solution(arr, divisor) {
  let now = arr.filter(val => val % divisor == 0);
  if (now == "") now.push(-1);

  return now.sort((a, b) => a - b);
}

//멋진 풀이
function solution(arr, divisor) {
  let answer = [];
  arr.map(o => {
    o % divisor === 0 && answer.push(o);
  });

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

//멋진 풀이2
function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] % divisor == 0) answer.push(arr[i]);
  }

  return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}
