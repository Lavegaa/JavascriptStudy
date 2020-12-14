/*
    여행가가 NxN크기의 정사각형 공간위에서 L,R,U,D으로 적혀있는 계획에 따라 이동한다.
    시작지점은 1,1이고 최종 계획에 따라 도착한 위치를 return한다.
*/

const N = 5;
const plans = ["R","R","R","U","D","D"];

const travel = (n, plans) => {
    //          L R U D
    const dx = [0,0,-1,1];
    const dy = [-1,1,0,0];
    const move = ['L','R','U','D'];
    let x = 1, y = 1;
    plans.forEach(val=>{
        const idx = move.indexOf(val);
        let nx = x+dx[idx];
        let ny = y+dy[idx];
        if(nx>=1 && ny>=1 && nx<=n && ny<=n) {
            x = nx;
            y = ny;
        }
    })
    return [x,y];
}

console.log(travel(N,plans));