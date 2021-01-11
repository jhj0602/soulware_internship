function first(a,b,callback){
	let v=a*b;
	callback(v);
}

first(1,2,function(v){//first 함수를 호출할때 익명 함수를 parameter로 넘겨줌
	console.log(v);		//2
})