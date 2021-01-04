/*
    N X M 크기의 얼음 틀이 있다. 구멍이 뚫려있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시된다.
    구멍이 뚫려있는 부분끼리 상, 하, 좌, 우로 붙어 있는 경우 서로 연결되어 있는 것으로 간주한다.
    이때 얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수를 구하는 프로그램을 작성하라.
*/
// const n = 4, m = 5;
// const ice = [[0,0,1,1,0],[0,0,0,1,1],[1,1,1,1,1],[0,0,0,0,0]];
const n = 4, m = 5;
const ice = [[0,0,1,1,0],[0,0,0,1,0],[1,1,1,1,0],[0,0,0,1,0]];

const findIce = (n, m) => {
    let result = 0;
    for(let i = 0; i<n; i+=1) {
        for(let j = 0; j<m; j+=1) {
            if(dfs(i,j)) {
                result += 1;
            }
        }
    }
    return result;
}

const dfs = (x,y) => {
    if(x<0 || x>=n || y<0 || y>=m) {
        return false;
    }
    if(ice[x][y] === 0) {
        ice[x][y] = 1;
        dfs(x, y-1);
        dfs(x, y+1);
        dfs(x-1, y);
        dfs(x+1, y);
        return true;
    }
    return false;
}

console.log(findIce(n,m));