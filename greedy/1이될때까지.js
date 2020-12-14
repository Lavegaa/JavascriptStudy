/*
    N과 M이 주어졌을 때 N이 1이될 때 까지 2가지 규칙을 지키며 가장 적게 드는 횟수를 구한다.
    1. N에서 1을 뺸다.
    2. N에서 M을 나눈다.
*/

const N = 25;
const M = 3;

const toOne = (N,M) => {
    let count = 0;
    while(N!==1) {
        N%M === 0 ? N = N/M : N -= 1;
        count++;
    }
    return count;
}

console.log(toOne(N,M));