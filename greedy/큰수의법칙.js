/*
    배열 arr와 더해지는 횟수 M, 한 index에서 반복해서 더할 수 있는 횟수 K일 경우 가장 큰 수를 구해라.
    (ex: arr = [1,2,3], M = 9, K = 2일 경우 3+3+2+3+3+2+3+3+2)
*/

const arr = [2,3,4,5,6,];
const M = 8;
const N = 3;

const big = (arr,M,N) => {
    arr.sort((a,b)=>-a+b);
    const first = arr[0];
    const second = arr[1];
    const dummy = first*(N-1) + second;

    return dummy*(Math.floor(M/N)) + first*(M%N);
}

console.log(big(arr,M,N));