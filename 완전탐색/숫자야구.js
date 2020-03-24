//====문제====
//각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다.
//그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.
//질문한 세 자리의 수, 스트라이크의 수, 볼의 수를 담은 2차원 배열 baseball이 매개변수로 주어질 때,
//가능한 답의 개수를 return 하도록 solution 함수를 작성해주세요.

//====IDEA====
//123부터 987까지 0이 없고 중복되지 않은 값들 중에 baseball에서 주어진 값과 숫자야구 로직을 통해 비교한 후 스트라이크, 볼의 개수가 전부 맞는 지 확인.

function solution(baseball) {
  var answer = 0;
  let stack = 0;
  for (let i = 123; i <= 987; i++) {
    //const [x,y,z] = i.toString().split("").map(val=>Number(val));
    //위와 같이 비구조화할당으로 선언 가능.
    const target = i
      .toString()
      .split("")
      .map(val => Number(val));
    if (target.indexOf(0) !== -1 || [...new Set(target)].length !== 3) {
      continue;
    }
    baseball.forEach(val => {
      let count = [0, 0];
      const numbers = val[0]
        .toString()
        .split("")
        .map(val => Number(val));
      numbers.forEach((val, idx) => {
        if (val === target[idx]) {
          count[0]++;
        } else if (
          val === target[(idx + 1) % 3] ||
          val === target[(idx + 2) % 3]
        ) {
          count[1]++;
        }
      });
      if (count[0] === val[1] && count[1] === val[2]) {
        stack++;
      }
    });
    if (stack === baseball.length) {
      answer++;
    }
    stack = 0;
  }

  return answer;
}
