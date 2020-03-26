//(https://programmers.co.kr/learn/courses/30/lessons/43105)

//====문제====

//          7
//        3   8
//      8   1   0
//    2   7   4   4
//  4   5   2   6   5

//위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다.
//아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.

//삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.

//====IDEA====
//가장 큰 숫자의 합을 원하므로 두 값 중 더해야 하는 값을 선택 할 때 더 큰값만 저장해서 진행한다.

function solution(triangle) {
  return Math.max(
    ...triangle.reduce(
      (dp, raw) => {
        return raw.map((v, i) => {
          return (
            Math.max(i === 0 ? 0 : dp[i - 1], i === dp.length ? 0 : dp[i]) + v
          );
        });
        //가장 왼쪽, 가장 오른쪽에 있는 값들은 삼항연산자로 조건을 나눈다.
      },
      [0]
    )
  );
}
