/* 
    체스말 나이트의 위치가 정해졌을 때 나이트가 움직 일 수 있는 경우의 수를 구해라.
*/

const knight = (position) => {
    let count = 0;
    const row = parseInt(position[1]);
    const column = Math.abs(96-position[0].charCodeAt());
    const steps = [[-2,-1],[-2,1],[2,-1],[2,1],[1,-2],[1,2],[-1,-2],[-1,2]];

    steps.forEach(val=>{
        const nx = val[0]+row;
        const ny = val[1]+column;
        if(nx>=1 && ny>=1 && nx<=8 && ny<=8) {
            count+=1;
        }
    })
    return count;
}

console.log(knight("a1"));