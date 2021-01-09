
const dayweek = ['일','월','화','수','목','금','토'];
const moment = require('moment');
var dayConut = moment().daysInMonth();//이번달 일 수 구하기
var cnt=0;
var needDay = dayweek[1];
for(let i=1;i<=dayConut;i++){
    if(needDay==dayweek[moment().date(i).day()]){//i에 해당하는 요일 구하기
        cnt++;
    }
    
}
console.log(needDay+"요일은 총 "+cnt+"번 있습니다");