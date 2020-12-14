/*
    M x N의 배열에서 각 행의 가장 작은수들을 뽑아 그중 가장 큰수를 구한다.
*/

const arr1 = [[3,1,2],[4,1,4],[2,2,2]];
const arr2 = [[7,3,1,8],[3,3,3,4]];

const card = (arr) => {
    let max = 0;
    arr.forEach(val=>{
        max = Math.max(Math.min(...val), max);
    })
    return max;
}

console.log(card(arr1));
console.log(card(arr2));