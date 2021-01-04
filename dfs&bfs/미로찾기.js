const maze = () => {
    let map = [[1,0,1,0,1,0],[1,1,1,1,1,1],[0,0,0,0,0,1],[1,1,1,1,1,1],[1,1,1,1,1,1]];
    let n = 5, m = 6;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const bfs = (x, y) => {
        const queue = [[x,y]];
        while(queue.length !== 0) {
            let first = queue.shift();
            for(let i = 0; i<4; i+=1) {
                let nx = first[0] + dx[i];
                let ny = first[1] + dy[i];
                if(nx < 0 || ny < 0 || nx >= n || ny >= m) {
                    continue;
                }
                if(map[nx][ny] === 0) {
                    continue;
                }
                if(map[nx][ny] === 1) {
                    map[nx][ny] = map[first[0]][first[1]] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
        return map[n-1][m-1];
    }
    console.log(bfs(0,0));
}
maze();