//---------------------------------------------------------------------------------------
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
//---------------------------------------------------------------------------------------


//내 풀이
function solution(phone_number) {
    var answer = '';
    for(let i=0;i<phone_number.length-4;i++){
        answer+="*";
    }
    answer += phone_number.substr(phone_number.length-4)
    return answer;
}

//멋진 풀이 1
function hide_numbers(s){
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    //함수를 완성해주세요
  
    return result;
  }

//멋진 풀이 2
function hide_numbers(s){
    return "*".repeat(s.length-4)+s.substr(-4,4);
}