//---------------------------------------------------------------------------------------
// 오늘은 체육수업이 있는 날입니다.
// 그런데 점심시간에 도둑이 들어 몇몇 학생의 체육복이 도난을 당했습니다.
// 다행히 일부 학생들이 여벌의 체육복을 가져왔습니다.
// 학생들의 번호는 체격 순으로 매겨져 있기 때문에 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려주려고 합니다.
// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
// 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 2명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
//---------------------------------------------------------------------------------------

//내풀이
function solution(n, lost, reserve) {
  let answer = n;
  let state = false;
  for (let i in lost) {
    state = false;
    for (let j in reserve) {
      if (reserve[j] == lost[i] - 1) {
        reserve[j] = -100;
        state = true;
        break;
      } else if (reserve[j] == lost[i] + 1) {
        reserve[j] = -100;
        state = true;
        break;
      } else if (reserve[j] == lost[i]) {
        reserve[j] = -100;
        state = true;
        break;
      }
    }
    if (state == false) {
      answer -= 1;
    }
  }

  return answer;
}

//멋진 풀이
function solution(n, lost, reserve) {
  return (
    n -
    lost.filter(a => {
      const b = reserve.find(r => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter(r => r !== b);
    }).length
  );
}
