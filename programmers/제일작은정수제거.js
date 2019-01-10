//---------------------------------------------------------------------------------------
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
//---------------------------------------------------------------------------------------

//내 풀이
function solution(arr) {
    let min = arr[0];
    for(let i in arr){
        if(min>arr[i]){
            min = arr[i]
        }
    }
    console.log(min);
    if(arr.length==1){
        return -1
    }else{
        return arr.filter(val=>{val!=min});

    }
}

//내 풀이2
//시간이 엄청 오래걸림. 1번case는 시간초과 걸림.
//...으로 배열을 복사하는데 오래걸리는지 이걸통해 filter를 하는데 오래걸리는지 모르겠음.
function solution(arr) {
   
    return arr.length===1? [-1] :arr.filter(val=>val!=Math.min(...arr))

}

//멋진 풀이 1
//여기선 ...을 통해 복사하는대신 이것을 직접 filter로 비교하지 않고 해당 index값만 받아옴.
//val마다 ...으로 배열을 복사하는것이 시간을 오래잡아먹는 것 같음.
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

//내 풀이 2에 참고
function solution(arr) {
    let min = Math.min(...arr)
     return arr.length===1? [-1] :arr.filter(val=>val!=min)
 }


//멋진 풀이 2
//min.apply에 관해 공부해보기
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
function solution(arr) {
    if (arr.length === 1 ) {
        return [-1]
    }
    const minValue = Math.min.apply(null, arr)
    const index = arr.findIndex(value => value === minValue)
    arr.splice(index, 1)
    return arr
}