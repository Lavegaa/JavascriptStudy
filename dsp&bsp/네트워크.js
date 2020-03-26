//(https://programmers.co.kr/learn/courses/30/lessons/43162)

//====문제====

//네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
//예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
//따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

//컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

//====IDEA====
//방문 여부를 가지고 있는 배열(visited)를 두고 방문을 채크하며 dfs로 노드를 순회한다.

function solution(n, computers) {
  var answer = 0;
  let visited = [];
  for (let j = 0; j < n; j++) {
    visited.push(0);
  }
  function dfs(index) {
    visited[index] = 1;
    computers[index].forEach((val, idx) => {
      if (val === 1 && visited[idx] === 0) {
        dfs(idx);
      }
    });
  }
  visited.forEach((val, idx) => {
    if (val === 0) {
      dfs(idx);
      answer += 1;
    }
  });
  return answer;
}
