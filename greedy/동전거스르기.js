/*
    동전을 거슬러 줄 때 가장 작은 숫자의 동전을 사용하는 방법
*/

let cost = 1260;

const money = (cost) => {
    const coin = [500,100,50,10];
    let answer = 0;
    coin.forEach(val=>{
        answer += Math.floor(cost/val);
        cost = cost%val;
    });
    return answer;
}

console.log(money(cost));
