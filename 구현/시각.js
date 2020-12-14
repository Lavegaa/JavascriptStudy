/*
    N이 입력되면 00시00분00초부터 N시59분59초까지 모든 시각중 3이 하나라도 포함되는 모든 경우의 수를 구해라.
*/

const time = (N) => {
    let count = 0;
    for(let h=0; h<N+1; h+=1) {
        for(let m=0; m<60; m+=1) {
            for(let s=0; s<60; s+=1) {
                if(`${h}${m}${s}`.indexOf("3") !== -1) {
                    count+=1;
                }
            }
        }
    }
    return count;
}

console.log(time(5));