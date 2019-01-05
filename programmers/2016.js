//---------------------------------------------------------------------------------------
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.
//---------------------------------------------------------------------------------------

//내 풀이
function solution(a, b) {
    var answer = '';
    let total = 0
    for(let i = 1;i<a;i++){
        if(i==1||i==3||i==5||i==7||i==8||i==10){
            total +=31
        }else if(i == 4||i == 6||i == 9||i == 11){
            total +=30         
        }else if(i==2){
            total +=29
        }
    }

    total = total+b;  
    
    switch(total%7){
            case(1) : answer="FRI";
                      return answer;
            case(2) : answer="SAT";
                      return answer;
            case(3) : answer="SUN";
                      return answer;
            case(4) : answer="MON";
                      return answer;
            case(5) : answer="TUE";
                      return answer;
            case(6) : answer="WED";
                      return answer;
            case(0) : answer="THU";
                      return answer;
            default : console.log("error");
    }
}

//멋진 풀이
function getDayName(a,b){
    var date = new Date(2016, (a - 1), b);
      return date.toString().slice(0, 3).toUpperCase();
}

//멋진 풀이2
function getDayName(a,b){
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay()
    return arr[day];
}